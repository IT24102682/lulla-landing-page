"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import INVENTORY from "@/data/inventory.json"

export function SearchModal({
    open,
    onOpenChange,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) {
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                onOpenChange(!open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [onOpenChange, open])

    const runCommand = React.useCallback((command: () => unknown) => {
        onOpenChange(false)
        command()
    }, [onOpenChange])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl w-full p-0 gap-0 overflow-hidden bg-[#FDFCF8] max-h-[85vh] flex flex-col shadow-2xl">
                <DialogTitle className="sr-only">Search</DialogTitle>
                <Command className="border-none rounded-none flex flex-col bg-transparent overflow-hidden h-full">
                    <div className="flex items-center px-6 py-4 border-b border-border/10">
                        <Search className="mr-3 h-5 w-5 shrink-0 opacity-40" />
                        <CommandInput
                            placeholder="Search"
                            className="flex-1 text-lg font-medium bg-transparent outline-none border-none placeholder:text-muted-foreground/40 h-auto p-0"
                        />
                    </div>

                    <CommandList className="overflow-y-auto p-6 md:p-8 space-y-8">
                        <CommandEmpty className="py-12 text-center text-sm text-muted-foreground uppercase tracking-wider">
                            No results found.
                        </CommandEmpty>

                        <CommandGroup heading="PRODUCTS" className="[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground/70 [&_[cmdk-group-heading]]:mb-4 [&_[cmdk-group-items]]:grid [&_[cmdk-group-items]]:grid-cols-2 [&_[cmdk-group-items]]:md:grid-cols-4 [&_[cmdk-group-items]]:gap-x-6 [&_[cmdk-group-items]]:gap-y-8">
                            {INVENTORY.slice(0, 4).map((product) => (
                                <CommandItem
                                    key={product.id}
                                    value={product.name}
                                    onSelect={() => {
                                        runCommand(() => router.push(`/shop/${product.category}`))
                                    }}
                                    className="flex flex-col items-start gap-4 p-0 data-[selected=true]:bg-transparent data-[selected=true]:opacity-80 cursor-pointer group"
                                >
                                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/20">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-1.5 w-full">
                                        <h4 className="font-heading text-sm font-medium leading-tight line-clamp-1">{product.name}</h4>
                                        <p className="text-xs text-muted-foreground font-medium">{product.price}</p>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>

                        <CommandSeparator className="bg-border/10" />

                        <CommandGroup heading="POPULAR COLLECTIONS" className="[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground/70 [&_[cmdk-group-heading]]:mb-4 [&_[cmdk-group-items]]:grid [&_[cmdk-group-items]]:grid-cols-1 [&_[cmdk-group-items]]:md:grid-cols-3 [&_[cmdk-group-items]]:gap-4">
                            <CommandItem onSelect={() => runCommand(() => router.push("/collections"))} className="h-32 bg-muted/20 p-6 flex flex-col justify-end items-start cursor-pointer hover:bg-muted/30 transition-colors">
                                <span className="font-heading text-lg font-medium">New Arrivals</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Shop Now</span>
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("/lookbook"))} className="h-32 bg-muted/20 p-6 flex flex-col justify-end items-start cursor-pointer hover:bg-muted/30 transition-colors">
                                <span className="font-heading text-lg font-medium">Lookbook</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">View Editorial</span>
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("/story"))} className="h-32 bg-muted/20 p-6 flex flex-col justify-end items-start cursor-pointer hover:bg-muted/30 transition-colors">
                                <span className="font-heading text-lg font-medium">Our Story</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Read More</span>
                            </CommandItem>
                        </CommandGroup>

                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
