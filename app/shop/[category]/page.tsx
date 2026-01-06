
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import INVENTORY from "@/data/inventory.json"
import { notFound } from "next/navigation"
import { SortDropdown } from "@/components/sort-dropdown"
import { ViewToggle } from "@/components/view-toggle"

// Define the shape of the inventory items based on your JSON
type Product = {
    id: string
    name: string
    price: string
    image: string
    category: string
    collections?: string[]
}

// Map slug to display title
const CATEGORY_TITLES: Record<string, string> = {
    "shop-all": "All Products",
    "dresses": "Dresses",
    "maxi-dresses": "Maxi Dresses",
    "shirts": "Shirts",
    "skirts": "Skirts",
    "pants": "Pants",
    "t-shirts": "T-Shirts",
    "shorts": "Shorts",
    "sets": "Co-ord Sets",
    "tops": "Tops"
}

export function generateStaticParams() {
    return Object.keys(CATEGORY_TITLES).map((category) => ({
        category: category,
    }))
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { sort?: string, view?: string } }) {
    const categorySlug = params.category
    const sort = searchParams.sort || 'featured'
    const view = searchParams.view || 'grid'

    // Handle collections slugs by redirecting or showing a specific view if needed, 
    // but for now let's assume this page handles standard categories.
    // If it's a collection slug (e.g. "into-the-season"), it might fall through here.
    // We can add logic to handle that or let it be.

    const title = CATEGORY_TITLES[categorySlug] || categorySlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())

    let products = categorySlug === "shop-all"
        ? [...INVENTORY]
        : INVENTORY.filter((item: any) => {
            // Check category match
            const categoryMatch = item.category === categorySlug || (categorySlug === 'dresses' && item.category === 'maxi-dresses');

            // Check collection match if not a category match
            const collectionMatch = item.collections && item.collections.includes(categorySlug);

            return categoryMatch || collectionMatch;
        }) as Product[]

    // Application of Sorting Logic
    if (sort === 'title-asc') {
        products.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === 'title-desc') {
        products.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sort === 'price-asc') {
        products.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")))
    } else if (sort === 'price-desc') {
        products.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, "")))
    } else if (sort === 'created-desc') {
        // Mock new to old - using ID or random if no date
        products.sort((a, b) => b.id.localeCompare(a.id))
    } else if (sort === 'created-asc') {
        // Mock old to new
        products.sort((a, b) => a.id.localeCompare(b.id))
    }
    // 'featured' and 'best-selling' can be default order for now

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-[1800px] mx-auto space-y-12">
                    <header className="flex flex-col gap-4">
                        <div className="text-sm text-muted-foreground uppercase tracking-widest">
                            Shop / {title}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-normal tracking-tight">{title}</h1>
                        <p className="text-muted-foreground max-w-xl">
                            {products.length} result{products.length !== 1 ? 's' : ''}
                        </p>
                    </header>

                    {/* Filter Bar */}
                    <div className="sticky top-[85px] z-30 bg-background/95 backdrop-blur-sm border-b py-4 flex items-center justify-between text-xs font-medium uppercase tracking-widest">
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <button className="hover:text-foreground flex items-center gap-1">Availability <span className="text-[10px]">▼</span></button>
                            <button className="hover:text-foreground flex items-center gap-1">Price <span className="text-[10px]">▼</span></button>
                        </div>

                        <div className="flex items-center gap-6 text-muted-foreground">
                            <span className="hidden sm:inline-block">{products.length} Items</span>
                            <SortDropdown />
                            <ViewToggle currentView={view} />
                        </div>
                    </div>

                    {products.length > 0 ? (
                        <div className={`grid gap-6 md:gap-10 ${view === 'grid' ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'}`}>
                            {products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center space-y-4">
                            <p className="text-xl text-muted-foreground">No products found in this category yet.</p>
                            <p className="text-sm">Check back soon for upcoming collections.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}
