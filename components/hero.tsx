import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh]">
      <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden rounded-[2.5rem]">
        <Image
          src="/feminine-minimalist-fashion-model-editorial-cream-.jpg"
          alt="Lulla & Co. Editorial"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-8 md:pl-12 lg:pl-24">
        <div className="space-y-4">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-secondary-foreground/60">
            Est. 2024 — Colombo
          </p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl leading-[1.1] text-balance">
            Optimal grace meets <span className="italic">exquisite</span> design
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed text-pretty">
            Redefining modern femininity through minimalist silhouettes and premium natural fabrics. Effortless luxury
            for the discerning woman.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 group">
          <Button
            size="lg"
            className="rounded-full px-10 py-7 text-lg group/btn transition-all duration-300 border border-transparent bg-foreground text-background group-hover:bg-background group-hover:text-foreground group-hover:border-foreground/20 hover:!bg-foreground hover:!text-background hover:!border-transparent hover:-translate-y-1 hover:shadow-lg active:scale-95"
            asChild
          >
            <Link href="/collections">
              Shop the Collection
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 py-7 text-lg border-foreground/20 bg-transparent transition-all duration-300 hover:bg-foreground hover:text-background hover:border-transparent hover:-translate-y-1 hover:shadow-md active:scale-95"
            asChild
          >
            <Link href="/lookbook">View Lookbook</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
