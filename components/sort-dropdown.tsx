"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
    { label: "Featured", value: "featured" },
    { label: "Best selling", value: "best-selling" },
    { label: "Alphabetically, A-Z", value: "title-asc" },
    { label: "Alphabetically, Z-A", value: "title-desc" },
    { label: "Price, low to high", value: "price-asc" },
    { label: "Price, high to low", value: "price-desc" },
    { label: "Date, old to new", value: "created-asc" },
    { label: "Date, new to old", value: "created-desc" },
]

export function SortDropdown() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentSort = searchParams.get("sort") || "featured"

    const createSortUrl = (sortValue: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("sort", sortValue)
        return `${pathname}?${params.toString()}`
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-foreground flex items-center gap-1 outline-none">
                SORT <span className="text-[10px] scale-75"><ChevronDown className="h-3 w-3" /></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background border rounded-none p-0 shadow-xl">
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => router.push(createSortUrl(option.value))}
                        className={cn(
                            "flex items-center gap-2 px-4 py-3 cursor-pointer rounded-none hover:bg-muted/50 focus:bg-muted/50",
                            currentSort === option.value && "font-medium"
                        )}
                    >
                        {currentSort === option.value && <Check className="h-4 w-4 absolute left-1" />}
                        <span className={cn("ml-4", currentSort === option.value ? "text-foreground" : "text-muted-foreground")}>
                            {option.label}
                        </span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
