
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LayoutDashboard, Package, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-neutral-50 text-foreground animate-fade-in">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 flex">
                {/* Sidebar (Mock) */}
                <div className="hidden lg:flex flex-col w-64 space-y-2 border-r border-border pr-8">
                    <div className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">Menu</div>
                    <button className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg text-sm font-medium transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                    </button>
                    <Link href="/admin/inventory">
                        <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-neutral-200 rounded-lg text-sm font-medium transition-colors w-full">
                            <Package className="w-4 h-4" />
                            Products / Inventory
                        </button>
                    </Link>
                    <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-neutral-200 rounded-lg text-sm font-medium transition-colors">
                        <Users className="w-4 h-4" />
                        Customers
                    </button>
                    <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-neutral-200 rounded-lg text-sm font-medium transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 lg:pl-12 space-y-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-serif font-light">Dashboard</h1>
                            <span className="text-sm text-muted-foreground">Welcome back, Admin</span>
                        </div>
                        <Link href="/admin/products/new">
                            <Button className="bg-black text-white hover:bg-neutral-800">
                                + Add Product
                            </Button>
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-border space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Revenue</div>
                            <div className="text-3xl font-serif">Rs. 1,245,000</div>
                            <div className="text-xs text-green-600">+12% from last month</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-border space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Orders</div>
                            <div className="text-3xl font-serif">145</div>
                            <div className="text-xs text-green-600">+5 new today</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-border space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Active Products</div>
                            <div className="text-3xl font-serif">10</div>
                            <div className="text-xs text-muted-foreground">Inventory good</div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-border flex items-center justify-center h-64 text-muted-foreground border-dashed">
                        Chart / Analytics Placeholder
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
