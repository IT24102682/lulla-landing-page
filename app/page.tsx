import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedArrivals } from "@/components/featured-arrivals"
import { AboutBrand } from "@/components/about-brand"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedArrivals />
      <AboutBrand />
      <Newsletter />
      <Footer />
    </main>
  )
}
