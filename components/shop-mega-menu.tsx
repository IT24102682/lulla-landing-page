import Image from "next/image"
import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const CATEGORIES = [
    "Shop All",
    "Dresses",
    "Maxi Dresses",
    "Shirts",
    "Skirts",
    "Pants",
    "T-Shirts",
    "Shorts",
]

const FEATURED_PRODUCTS = [
    {
        name: "Bayleee Fenella Black Tube Top",
        price: "Rs 3,490.00",
        image: "/minimalist-silk-slip-dress-sage-green.jpg", // Using existing placeholder
    },
    {
        name: "Bayleee Kai Black Tube Top",
        price: "Rs 3,290.00",
        image: "/cream-cashmere-knit-top-minimalist.jpg",
    },
    {
        name: "Bayleee Aily One Shoulder Maxi Dress",
        price: "Rs 7,290.00",
        image: "/satin-trousers-beige-minimalist.jpg",
    },
]

export function ShopMegaMenu() {
    return (
        <div className="flex w-full gap-8 bg-neutral-900 p-8 text-neutral-100 lg:w-[100vw]">
            {/* Categories Column */}
            <div className="flex w-1/4 flex-col gap-4 border-r border-neutral-800 pr-6">
                {CATEGORIES.map((category) => (
                    <Link
                        key={category}
                        href={`/shop/${category.toLowerCase().replace(" ", "-")}`}
                        className="text-sm font-medium uppercase tracking-wider text-neutral-400 transition-all duration-300 hover:translate-x-2 hover:text-white"
                    >
                        {category}
                    </Link>
                ))}
            </div>

            {/* Featured Products Columns */}
            <div className="flex flex-1 gap-6">
                {FEATURED_PRODUCTS.map((product) => (
                    <div key={product.name} className="flex flex-1 flex-col gap-3 group cursor-pointer leading-none no-underline outline-none transition-all duration-300 hover:-translate-y-2">
                        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-2 space-y-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-100 group-hover:text-white">
                                {product.name}
                            </h4>
                            <p className="text-xs text-neutral-400 group-hover:text-neutral-300">{product.price}</p>
                            <p className="text-[10px] text-neutral-500">
                                or up to 4x <span className="font-bold">Rs {(parseInt(product.price.replace(/\D/g, '')) / 4).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
