"use client"

import * as React from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export function ViewToggle({ currentView }: { currentView: string }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createViewUrl = (view: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("view", view)
        return `${pathname}?${params.toString()}`
    }

    return (
        <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <button
                onClick={() => router.push(createViewUrl("grid"))}
                className={cn(
                    "w-4 h-4 grid grid-cols-2 gap-0.5 cursor-pointer transition-opacity",
                    currentView === "grid" ? "opacity-100" : "opacity-40 hover:opacity-100"
                )}
                aria-label="Grid view"
            >
                <div className="bg-current"></div><div className="bg-current"></div>
                <div className="bg-current"></div><div className="bg-current"></div>
            </button>
            <button
                onClick={() => router.push(createViewUrl("list"))}
                className={cn(
                    "w-4 h-4 flex flex-col gap-0.5 cursor-pointer transition-opacity",
                    currentView === "list" ? "opacity-100" : "opacity-40 hover:opacity-100"
                )}
                aria-label="List view"
            >
                <div className="bg-current h-full w-full"></div>
            </button>
        </div>
    )
}
