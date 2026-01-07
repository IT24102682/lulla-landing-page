"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarItemProps {
    href: string
    icon: React.ElementType
    label: string
}

function SidebarItem({ href, icon: Icon, label }: SidebarItemProps) {
    const pathname = usePathname()
    // Simple check: exact match or starts with href (for sub-routes if any, though exact is safer for dashboard vs inventory)
    // For Dashboard (/admin), we want exact. For Inventory (/admin/inventory), we want that.
    const isActive = href === "/admin" ? pathname === href : pathname.startsWith(href)

    return (
        <Link href={href} className="w-full">
            <Button
                variant="ghost"
                className={cn(
                    "w-full justify-start gap-3 h-12 text-sm font-medium transition-all rounded-lg",
                    // Base style + Hover style (Hover always applies Black/White)
                    "text-muted-foreground hover:bg-black hover:text-white",
                    // Active style (Subtle, so it doesn't clash with hover)
                    isActive && "text-foreground font-bold bg-neutral-100"
                )}
            >
                <Icon className="w-4 h-4" />
                {label}
            </Button>
        </Link>
    )
}

export function AdminSidebar() {
    return (
        <div className="hidden lg:flex flex-col w-64 space-y-2 border-r border-border pr-8">
            <div className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 pl-4">Menu</div>
            <SidebarItem href="/admin" icon={LayoutDashboard} label="Dashboard" />
            <SidebarItem href="/admin/inventory" icon={Package} label="Products" />
            <SidebarItem href="/admin/customers" icon={Users} label="Customers" />
            <SidebarItem href="/admin/settings" icon={Settings} label="Settings" />
        </div>
    )
}
