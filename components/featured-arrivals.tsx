import { ProductCard } from "./product-card"
import Link from "next/link"

const PRODUCTS = [
  { name: "Handloom Silk Slip", price: "Rs. 18,500", image: "/minimalist-silk-slip-dress-sage-green.jpg" },
  { name: "Linen Co-ord Set", price: "Rs. 12,200", image: "/cream-cashmere-knit-top-minimalist.jpg" },
  { name: "Batik Tailored Vest", price: "Rs. 9,800", image: "/tailored-linen-vest-charcoal-gray.jpg" },
  { name: "Satin Island Trousers", price: "Rs. 14,500", image: "/satin-trousers-beige-minimalist.jpg" },
]

export function FeaturedArrivals() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl leading-tight">Featured Arrivals</h2>
          <p className="text-muted-foreground max-w-sm">
            Curated pieces from our latest Autumn capsule, focused on texture and form.
          </p>
        </div>
        <Link href="/inventory" className="text-sm font-bold uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-muted-foreground transition-colors">
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
