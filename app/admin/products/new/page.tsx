"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { createProduct, getUniqueCollections } from "@/lib/actions"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NewProductPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [collections, setCollections] = useState<string[]>([])
    const [selectedCollection, setSelectedCollection] = useState("")
    const [isCustomCollection, setIsCustomCollection] = useState(false)
    const router = useRouter()

    useEffect(() => {
        getUniqueCollections().then(setCollections)
    }, [])

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const res = await createProduct(formData)
        setIsLoading(false)
        if (res.success) {
            alert("Product Added!")
            router.push('/admin')
        }
    }

    const handleCollectionChange = (val: string) => {
        if (val === "__NEW__") {
            setIsCustomCollection(true)
            setSelectedCollection("")
        } else {
            setIsCustomCollection(false)
            setSelectedCollection(val)
        }
    }

    return (
        <div className="min-h-screen bg-neutral-50 text-foreground animate-fade-in">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-border rounded-xl shadow-sm">
                    <div className="mb-8">
                        <h1 className="text-3xl font-serif font-light mb-2">Add New Product</h1>
                        <p className="text-sm text-muted-foreground">Enter the details below to add a new item to the inventory.</p>
                    </div>

                    <form action={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name</Label>
                            <Input id="name" name="name" required placeholder="e.g. Linen Summer Dress" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price (e.g. Rs. 5,000)</Label>
                                <Input id="price" name="price" required placeholder="Rs. " />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select name="category" required onValueChange={setCategory}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dresses">Dresses</SelectItem>
                                        <SelectItem value="tops">Tops</SelectItem>
                                        <SelectItem value="pants">Pants</SelectItem>
                                        <SelectItem value="skirts">Skirts</SelectItem>
                                        <SelectItem value="sets">Co-ord Sets</SelectItem>
                                        <SelectItem value="shirts">Shirts</SelectItem>
                                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                        <SelectItem value="shorts">Shorts</SelectItem>
                                        <SelectItem value="maxi-dresses">Maxi Dresses</SelectItem>
                                    </SelectContent>
                                </Select>
                                <input type="hidden" name="category" value={category} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Product Image</Label>
                            <Input id="image" name="image" type="file" accept="image/*" required className="cursor-pointer" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <textarea
                                id="description"
                                name="description"
                                className="flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Enter detailed product description..."
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="collections">Collection</Label>
                            {!isCustomCollection ? (
                                <Select onValueChange={handleCollectionChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a collection" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {collections.map((c) => (
                                            <SelectItem key={c} value={c}>
                                                {c.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="__NEW__" className="font-bold text-black border-t mt-1 pt-2">
                                            + New Collection
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <div className="flex gap-2">
                                    <Input
                                        id="collections"
                                        name="collections"
                                        placeholder="Enter new collection slug..."
                                        value={selectedCollection}
                                        onChange={(e) => setSelectedCollection(e.target.value)}
                                        autoFocus
                                    />
                                    <Button type="button" variant="outline" onClick={() => setIsCustomCollection(false)}>
                                        Cancel
                                    </Button>
                                </div>
                            )}
                            {/* Hidden input to submit the final value */}
                            <input type="hidden" name="collections" value={selectedCollection} />
                        </div>

                        <div className="space-y-3">
                            <Label>Initial Stock per Size</Label>
                            <div className="grid grid-cols-5 gap-3">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <div key={size} className="space-y-1">
                                        <Label htmlFor={`stock_${size}`} className="text-xs text-muted-foreground">{size}</Label>
                                        <Input
                                            id={`stock_${size}`}
                                            name={`stock_${size}`}
                                            type="number"
                                            defaultValue={20}
                                            min={0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 mt-4" disabled={isLoading}>
                            {isLoading ? "Saving..." : "Create Product"}
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
