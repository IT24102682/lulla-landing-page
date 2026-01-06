import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  return (
    <section className="py-32 px-6 text-center bg-foreground text-background rounded-t-[3rem] mt-12">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl text-background">The Inner Circle</h2>
          <p className="text-background/60 text-lg">
            Join our private list for early access to new collections and exclusive editorial content.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 items-center">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="h-14 rounded-full bg-background/10 border-background/20 text-background placeholder:text-background/40 px-8 text-lg"
          />
          <Button
            size="lg"
            className="h-14 px-12 rounded-full bg-background text-foreground hover:bg-background/90 text-lg w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            Subscribe
          </Button>
        </form>

        <p className="text-xs text-background/40 uppercase tracking-[0.2em]">
          By subscribing, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </section>
  )
}
