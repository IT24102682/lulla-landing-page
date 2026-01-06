
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function StoryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground animate-fade-in">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                    <Image
                        src="/story-hero.png"
                        alt="Abstract linen fabric texture"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-widest text-center shadow-lg mix-blend-overlay">
                            THE ART OF <br /> SLOW LIVING
                        </h1>
                    </div>
                </section>

                {/* The Origin */}
                <section className="py-24 px-6 md:px-12 bg-[#FDFCF8]">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">The Origin</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug">
                            "Born from a desire to find silence in the noise, Lulla & Co. bridges the gap between timeless elegance and everyday comfort."
                        </h2>
                        <div className="w-16 h-[1px] bg-foreground/20 mx-auto" />
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            We started with a simple question: What if luxury wasn't about excess, but about the feeling of home?
                            Founded in 2023, Lulla & Co. is a reflection of the modern woman's need for versatile, thoughtful pieces
                            that move with her through every season of life.
                        </p>
                    </div>
                </section>

                {/* Philosophy / Values */}
                <section className="py-24 px-6 md:px-12 bg-white border-y border-border/40">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="text-2xl font-serif">Sustainability</div>
                            <p className="text-muted-foreground text-sm leading-7">
                                We believe in fashion that respects the earth.
                                Our fabrics are ethically sourced, prioritizing natural fibers like linen, cotton, and silk
                                that leave a lighter footprint.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-2xl font-serif">Craftsmanship</div>
                            <p className="text-muted-foreground text-sm leading-7">
                                Every stitch tells a story. We partner with skilled artisans who finish our garments by hand,
                                ensuring that each piece is as durable as it is beautiful.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-2xl font-serif">Timelessness</div>
                            <p className="text-muted-foreground text-sm leading-7">
                                Trends fade; style remains. Our collections are designed to transcend seasons,
                                creating a capsule wardrobe that you will cherish for years to come.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Process */}
                <section className="py-24 px-6 md:px-12 bg-[#FDFCF8]">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-muted">
                            <Image
                                src="/story-craft.png"
                                alt="Artisan hands sketching designs"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="space-y-8">
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">The Process</span>
                            <h2 className="text-4xl font-serif font-light">Crafted by Hand, <br /> Heart, and Soul.</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our design process begins with the touch of fabric. We spend months selecting materials that feel second skin.
                                Sketches are drawn by hand, patterns are cut with precision, and prototypes are tested for movement and ease.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We reject mass production in favor of small-batch tailoring, allowing us to maintain
                                exceptional quality control and reduce waste.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founder's Note */}
                <section className="py-32 px-6 md:px-12 bg-white text-center">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            {/* Optional: Founder portrait placeholder if requested later */}
                        </div>
                        <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
                            "I hope these pieces bring you a sense of calm and confidence, reminding you that true luxury is the freedom to be yourself."
                        </p>
                        <div className="pt-8 flex flex-col items-center gap-4">
                            <Image
                                src="/story-signature.png"
                                alt="Founder signature"
                                width={200}
                                height={100}
                                className="opacity-80"
                            />
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Founder, Lulla & Co.</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
