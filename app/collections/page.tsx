import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const COLLECTIONS = [
    {
        title: "Into The Season",
        subtitle: "Vol 04",
        image: "/minimalist-silk-slip-dress-sage-green.jpg",
        slug: "into-the-season-vol-04"
    },
    {
        title: "Into The Season",
        subtitle: "Vol 03",
        image: "/cream-cashmere-knit-top-minimalist.jpg",
        slug: "into-the-season-vol-03"
    },
    {
        title: "Into The Season",
        subtitle: "Vol 02",
        image: "/satin-trousers-beige-minimalist.jpg",
        slug: "into-the-season-vol-02"
    },
    {
        title: "Into The Season",
        subtitle: "Vol 01",
        image: "/feminine-minimalist-fashion-model-editorial-cream-.jpg",
        slug: "into-the-season-vol-01"
    },
    {
        title: "The Ease Edit",
        subtitle: "Drop 02",
        image: "/tailored-linen-vest-charcoal-gray.jpg",
        slug: "the-ease-edit-drop-02"
    },
    {
        title: "Oversized Tee's",
        subtitle: "Lulla & Co.",
        image: "/sri-lankan-model-minimalist-fashion-island-aesthet.jpg",
        slug: "oversized-tees"
    },
    {
        title: "The Ease Edit",
        subtitle: "Vol 04",
        image: "/minimalist-clothing-detail-fabric-texture-sage.jpg",
        slug: "the-ease-edit-vol-04"
    },
    {
        title: "The Ease Edit",
        subtitle: "Vol 03",
        image: "/cream-cashmere-knit-top-minimalist.jpg", // Reusing image
        slug: "the-ease-edit-vol-03"
    }
]

export default function CollectionsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-[1800px] mx-auto space-y-12">
                    <header>
                        <h1 className="text-4xl md:text-5xl font-normal tracking-tight">Shop by Collection</h1>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {COLLECTIONS.map((collection, index) => (
                            <Link
                                key={index}
                                href={`/shop/${collection.slug}`}
                                className="group relative aspect-square overflow-hidden bg-neutral-100 block"
                            >
                                <Image
                                    src={collection.image}
                                    alt={`${collection.title} ${collection.subtitle}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                    <p className="text-xs uppercase tracking-[0.3em] mb-2 drop-shadow-md">{collection.subtitle}</p>
                                    <h2 className="text-2xl md:text-3xl font-serif tracking-wide drop-shadow-md">
                                        {collection.title}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
