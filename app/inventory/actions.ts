'use server'

import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'

const dataFilePath = path.join(process.cwd(), 'data', 'inventory.json')

export interface Product {
    id: string
    name: string
    price: string
    image: string
}

export async function getProducts(): Promise<Product[]> {
    try {
        const fileContent = fs.readFileSync(dataFilePath, 'utf-8')
        return JSON.parse(fileContent)
    } catch (error) {
        console.error('Error reading inventory file:', error)
        return []
    }
}

export async function addProduct(formData: FormData) {
    const name = formData.get('name') as string
    const price = formData.get('price') as string
    const image = formData.get('image') as string

    if (!name || !price) {
        throw new Error('Name and Price are required')
    }

    // Basic "Rs." prefix enforcement if missing, though typically handled in UI or strict input
    const formattedPrice = price.startsWith('Rs.') ? price : `Rs. ${price}`

    const newProduct: Product = {
        id: Date.now().toString(), // Simple ID generation
        name,
        price: formattedPrice,
        image: image || '/placeholder.svg'
    }

    const products = await getProducts()
    products.push(newProduct)

    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2))

    revalidatePath('/inventory')
    return { success: true }
}
