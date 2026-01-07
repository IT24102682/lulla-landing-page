"use client"

import Link from "next/link"
import * as React from "react"
import { ShoppingBag, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShopMegaMenu } from "@/components/shop-mega-menu"
import { SearchModal } from "@/components/search-modal"
import { CartDrawer } from "@/components/cart-drawer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [userName, setUserName] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Check for user name on mount
    const updateName = () => {
      const storedName = localStorage.getItem("userName")
      if (storedName) {
        setUserName(storedName)
      } else {
        setUserName(null)
      }
    }

    updateName()

    window.addEventListener("user-updated", updateName)
    return () => window.removeEventListener("user-updated", updateName)
  }, [])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-foreground">
            LULLA & CO.
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-auto p-0 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ShopMegaMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/collections" className="hover:text-foreground transition-colors">
              Collections
            </Link>
            <Link href="/story" className="hover:text-foreground transition-colors">
              Our Story
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={() => setOpen(true)}>
            <Search className="w-5 h-5" />
          </Button>
          <CartDrawer />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
          <Link href={userName ? "/profile" : "/login"}>
            {userName ? (
              <Avatar className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity">
                <AvatarFallback className="bg-black text-white text-xs font-bold">
                  {userName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="w-5 h-5" />
              </Button>
            )}
          </Link>
        </div>
      </nav >
      <SearchModal open={open} onOpenChange={setOpen} />
    </>
  )
}
