import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const LOOKBOOK_IMAGES = [
    {
        src: "/feminine-minimalist-fashion-model-editorial-cream-.jpg",
        alt: "Cream minimalist editorial",
        aspect: "aspect-[3/4]"
    },
    {
        src: "/minimalist-silk-slip-dress-sage-green.jpg",
        alt: "Sage green silk slip dress",
        aspect: "aspect-[3/4]"
    },
    {
        src: "/sri-lankan-model-minimalist-fashion-island-aesthet.jpg",
        alt: "Island aesthetic fashion",
        aspect: "aspect-square"
    },
    {
        src: "/cream-cashmere-knit-top-minimalist.jpg",
        alt: "Cashmere knit top",
        aspect: "aspect-[4/5]"
    },
    {
        src: "/tailored-linen-vest-charcoal-gray.jpg",
        alt: "Charcoal gray linen vest",
        aspect: "aspect-[3/4]"
    },
    {
        src: "/minimalist-clothing-detail-fabric-texture-sage.jpg",
        alt: "Fabric texture detail",
        aspect: "aspect-square"
    },
    {
        src: "/satin-trousers-beige-minimalist.jpg",
        alt: "Beige satin trousers",
        aspect: "aspect-[3/4]"
    },
]

export default function LookbookPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-[1800px] mx-auto">
                    <header className="mb-16 md:mb-24 text-center max-w-2xl mx-auto space-y-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Fall/Winter 2024</p>
                        <h1 className="text-5xl md:text-7xl font-normal tracking-tight">The Collection</h1>
                        <p className="text-lg text-muted-foreground font-light leading-relaxed">
                            An exploration of form, texture, and the quiet luxury of natural materials.
                            Captured in the golden light of the Sri Lankan coast.
                        </p>
                    </header>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {LOOKBOOK_IMAGES.map((image, index) => (
                            <div
                                key={index}
                                className="relative break-inside-avoid overflow-hidden group cursor-zoom-in"
                            >
                                <div className={`relative w-full overflow-hidden bg-neutral-100 ${image.aspect}`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
