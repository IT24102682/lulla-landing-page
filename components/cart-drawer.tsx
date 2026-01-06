"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function CartDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <ShoppingBag className="w-5 h-5" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col items-center justify-center text-center p-12 bg-background">
                <SheetHeader className="sr-only">
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-serif font-normal text-foreground">Your cart is empty</h2>
                    <p className="text-sm text-muted-foreground font-medium">
                        Have an account? <Link href="/login" className="underline underline-offset-4 hover:text-foreground">Log in</Link> to check out faster.
                    </p>
                    <Button asChild className="w-full max-w-[240px] mt-4 uppercase tracking-widest text-xs h-12 rounded-none bg-foreground text-background hover:bg-foreground/90 transition-opacity">
                        <Link href="/shop/shop-all">
                            Continue Shopping
                        </Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
