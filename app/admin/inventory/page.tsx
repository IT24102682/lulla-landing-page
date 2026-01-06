"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { deleteProduct } from "@/lib/actions"
// We can import JSON directly in client components in Next.js, but for "live" data usually we fetch.
// However, since it's a file based DB, importing it gives static data at build time or dev time.
// To make it truly dynamic without a fetch API, we might need to pass data from a server component wrapper or just rely on HMR in dev.
// For simplicity in this "mock" DB setup, we'll import it. 
// A better way for production would be a Server Component fetching data and passing to Client Table.
import INVENTORY from "@/data/inventory.json"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function InventoryPage() {
    const [products, setProducts] = useState(INVENTORY)
    const [isDeleting, setIsDeleting] = useState("")
    const router = useRouter()

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this product?")) return

        setIsDeleting(id)
        const res = await deleteProduct(id)
        if (res.success) {
            // Optimistic update
            setProducts(products.filter(p => p.id !== id))
            router.refresh()
        }
        setIsDeleting("")
    }

    return (
        <div className="min-h-screen bg-neutral-50 text-foreground animate-fade-in">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-[95%] mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Link href="/admin">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div>
                                <h1 className="text-3xl font-serif font-light">Inventory</h1>
                                <p className="text-sm text-muted-foreground">Manage your products ({products.length})</p>
                            </div>
                        </div>
                        <Link href="/admin/products/new">
                            <Button className="bg-black text-white hover:bg-neutral-800">
                                + Add Product
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-neutral-50 border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-medium">
                                <tr>
                                    <th className="px-6 py-4">Image</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Stock</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-neutral-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="relative w-12 h-16 bg-neutral-100 rounded-md overflow-hidden">
                                                <Image
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">{product.name}</td>
                                        <td className="px-6 py-4">{product.price}</td>
                                        <td className="px-6 py-4 capitalize">{product.category}</td>
                                        <td className="px-6 py-4">
                                            <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-[10px] text-muted-foreground w-max">
                                                {['XS', 'S', 'M', 'L', 'XL'].map(size => {
                                                    // @ts-ignore
                                                    const count = product.stock ? (product.stock[size] ?? '-') : '-';
                                                    return (
                                                        <div key={size} className={count === 0 ? "text-red-400 font-bold" : ""}>
                                                            <span className="font-medium text-black">{size}:</span> {count}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                onClick={() => handleDelete(product.id)}
                                                disabled={isDeleting === product.id}
                                            >
                                                {isDeleting === product.id ? "..." : <Trash2 className="w-4 h-4" />}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {products.length === 0 && (
                            <div className="p-12 text-center text-muted-foreground">
                                No products found. Add some!
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
