"use client"

import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-foreground">
          LULLA & CO.
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link href="/collections" className="hover:text-foreground transition-colors">
            Collections
          </Link>
          <Link href="/story" className="hover:text-foreground transition-colors">
            Our Story
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
        <Button className="hidden md:flex rounded-full px-8">Sign In</Button>
      </div>
    </nav>
  )
}
