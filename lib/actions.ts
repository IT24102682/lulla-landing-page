"use server"

import { promises as fs } from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'

const INVENTORY_PATH = path.join(process.cwd(), 'data', 'inventory.json')
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

export async function createProduct(formData: FormData) {
    // Ensure uploads dir exists
    await fs.mkdir(UPLOADS_DIR, { recursive: true })

    // 1. Read existing data
    const fileContent = await fs.readFile(INVENTORY_PATH, 'utf-8')
    const inventory = JSON.parse(fileContent)

    // 2. Extract new data
    const name = formData.get('name') as string
    const price = formData.get('price') as string
    const category = formData.get('category') as string
    const collectionsStr = formData.get('collections') as string
    const description = formData.get('description') as string

    // Stock Handling
    const sizes = ['XS', 'S', 'M', 'L', 'XL']
    const stock: Record<string, number> = {}
    sizes.forEach(size => {
        const count = formData.get(`stock_${size}`)
        stock[size] = count ? parseInt(count.toString()) : 0
    })

    // Image Handling
    const imageFile = formData.get('image') as File
    let imagePath = '/placeholder.svg'

    if (imageFile && imageFile.size > 0) {
        const buffer = Buffer.from(await imageFile.arrayBuffer())
        // Clean filename and add timestamp to avoid collisions
        const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '')}`
        await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer)
        imagePath = `/uploads/${filename}`
    }

    // 3. Generate ID
    const newId = (inventory.length + 1).toString()

    // 4. Create new product object
    const newProduct = {
        id: newId,
        name,
        price,
        image: imagePath,
        category,
        description,
        collections: collectionsStr ? collectionsStr.split(',').map(s => s.trim()) : [],
        stock // Saved as { XS: 20, S: 20, ... }
    }

    // 5. Append and Write
    inventory.push(newProduct)
    await fs.writeFile(INVENTORY_PATH, JSON.stringify(inventory, null, 4))

    // 6. Revalidate
    revalidatePath('/shop')
    revalidatePath('/collections')
    revalidatePath('/admin')
    revalidatePath('/')

    return { success: true, message: 'Product created successfully' }
}

export async function purchaseItem(id: string, size: string) {
    const fileContent = await fs.readFile(INVENTORY_PATH, 'utf-8')
    const inventory = JSON.parse(fileContent)

    const productIndex = inventory.findIndex((p: any) => p.id === id)
    if (productIndex === -1) return { success: false, message: 'Product not found' }

    const product = inventory[productIndex]

    // Initialize stock if missing (backward compatibility)
    if (!product.stock) product.stock = {}

    const currentStock = product.stock[size] || 0

    if (currentStock > 0) {
        product.stock[size] = currentStock - 1
        inventory[productIndex] = product

        await fs.writeFile(INVENTORY_PATH, JSON.stringify(inventory, null, 4))

        revalidatePath(`/product/${id}`)
        revalidatePath('/admin/inventory')
        return { success: true, message: 'Item purchased', newStock: product.stock[size] }
    } else {
        return { success: false, message: 'Out of stock' }
    }
}

export async function getUniqueCollections() {
    try {
        const fileContent = await fs.readFile(INVENTORY_PATH, 'utf-8')
        const inventory = JSON.parse(fileContent)
        const allCollections = inventory.flatMap((p: any) => p.collections || [])
        // Return unique sorted collections
        return Array.from(new Set(allCollections)).sort() as string[]
    } catch (e) {
        return []
    }
}

export async function deleteProduct(id: string) {
    const fileContent = await fs.readFile(INVENTORY_PATH, 'utf-8')
    let inventory = JSON.parse(fileContent)

    inventory = inventory.filter((item: any) => item.id !== id)

    await fs.writeFile(INVENTORY_PATH, JSON.stringify(inventory, null, 4))

    revalidatePath('/admin/inventory')
    revalidatePath('/shop')
    revalidatePath('/collections')
    revalidatePath('/')

    return { success: true }
}
