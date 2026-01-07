
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import INVENTORY from "@/data/inventory.json"
import { Truck, RotateCcw, ShieldCheck } from "lucide-react"
import { ProductActions } from "@/components/product-actions"

export function generateStaticParams() {
    return INVENTORY.map((product) => ({
        id: product.id,
    }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = INVENTORY.find((item) => item.id === params.id)

    if (!product) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-background text-foreground animate-fade-in">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Image(s) */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnail Grid (Mock) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                    <Image
                                        src={product.image} // Reusing main image for mock thumbnails
                                        alt={`View ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-2">
                            <div className="text-sm text-muted-foreground uppercase tracking-widest">{product.category}</div>
                            <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight">{product.name}</h1>
                            <div className="text-2xl font-medium pt-2">{product.price}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                                <span>or up to 4 x {(parseInt(product.price.replace(/[^0-9]/g, '')) / 4).toLocaleString()} with</span>
                                {/* Mock Payment Icons */}
                                <div className="flex gap-2 font-bold opacity-60">
                                    <span>PayZy</span> <span>Koko</span> <span>Mintpay</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-border/40" />

                        <ProductActions product={product} />

                        {/* Highlights (Mock) */}
                        <div className="grid grid-cols-3 gap-4 pt-8 text-center text-xs text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                                <Truck className="w-5 h-5 opacity-50" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <RotateCcw className="w-5 h-5 opacity-50" />
                                <span>Easy Returns</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <ShieldCheck className="w-5 h-5 opacity-50" />
                                <span>Secure Checkout</span>
                            </div>
                        </div>

                        <div className="text-sm text-muted-foreground leading-relaxed pt-4">
                            <p>
                                {product.description || `Crafted for comfort and designed for elegance. This ${product.name.toLowerCase()} is a versatile addition to your wardrobe.`}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
