"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface ProductActionsProps {
    product: {
        id: string
        name: string
        price: string
        image: string
    }
}

export function ProductActions({ product }: ProductActionsProps) {
    const [selectedSize, setSelectedSize] = useState<string>('M')
    const addItem = useCart((state) => state.addItem)

    return (
        <div className="space-y-4">
            {/* Size Selector */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium uppercase tracking-wide">Size</span>
                    <button className="text-xs underline text-muted-foreground hover:text-foreground">Size Chart</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-12 border rounded-lg flex items-center justify-center text-sm hover:border-foreground hover:bg-neutral-50 transition-all focus:ring-1 focus:ring-foreground ${selectedSize === size ? 'border-foreground bg-neutral-50 ring-1 ring-foreground' : 'border-border'}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
                <Button
                    onClick={() => {
                        addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            size: selectedSize
                        })
                    }}
                    className="flex-1 h-14 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background text-xs uppercase tracking-[0.2em] rounded-none transition-colors"
                >
                    Add to Cart
                </Button>
                <Button className="flex-1 h-14 bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-[0.2em] rounded-none">
                    Buy It Now
                </Button>
            </div>
        </div>
    )
}
