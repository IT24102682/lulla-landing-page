import Image from "next/image"

export function AboutBrand() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="bg-secondary/40 rounded-[3rem] p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl leading-tight">Sri Lankan Heritage, Modern Soul.</h2>
          <div className="space-y-6 text-lg text-secondary-foreground/80 leading-relaxed max-w-xl">
            <p>
              Lulla & Co. is a contemporary Sri Lankan brand rooted in the island's rich textile history and the
              effortless sophistication of island living.
            </p>
            <p>
              We celebrate local craftsmanship by working with master artisans across Sri Lanka, blending traditional
              techniques with modern silhouettes to create pieces that feel both timeless and deeply personal.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-12">
            <div>
              <p className="text-3xl font-serif">Island</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Inspired Design</p>
            </div>
            <div>
              <p className="text-3xl font-serif">Local</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Artisanship</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden order-1 lg:order-2">
          <Image src="/sri-lankan-model-minimalist-fashion-island-aesthet.jpg" alt="Local Craftsmanship" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
