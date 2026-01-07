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
import { useCart } from "@/hooks/use-cart"

export function CartDrawer() {
    const cart = useCart()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingBag className="w-5 h-5" />
                    {cart.items.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                            {cart.items.length}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col items-center justify-center text-center p-12 bg-background data-[state=open]:duration-500 overflow-y-auto">
                <SheetHeader className="sr-only">
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                {cart.items.length === 0 ? (
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
                ) : (
                    <div className="flex flex-col w-full h-full gap-6">
                        <h2 className="text-2xl font-serif font-normal text-foreground uppercase tracking-widest">Your Cart</h2>
                        <div className="flex-1 overflow-y-auto space-y-6 w-full">
                            {cart.items.map((item, idx) => (
                                <div key={`${item.id}-${idx}`} className="flex gap-4 border-b border-border/40 pb-4">
                                    <div className="relative w-20 h-24 bg-neutral-100 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex-1 flex flex-col items-start text-left gap-1">
                                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.size}</span>
                                        <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                                        <span className="text-sm font-medium">{item.price}</span>
                                    </div>
                                    <button
                                        onClick={() => cart.removeItem(item.id, item.size)}
                                        className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground underline underline-offset-4 self-start"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="w-full space-y-4 pt-4 border-t border-border">
                            <div className="flex justify-between text-sm uppercase tracking-widest font-bold">
                                <span>Total</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <Button className="w-full h-12 uppercase tracking-widest text-xs font-bold rounded-none bg-black text-white hover:bg-black/90">
                                Checkout
                            </Button>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
