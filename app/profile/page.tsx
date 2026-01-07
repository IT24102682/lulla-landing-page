"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package, User, LogOut, Settings, CreditCard, Pencil, Home } from "lucide-react"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
    const [user, setUser] = useState({
        name: "Test User",
        email: "user@lulla.com",
        phone: "+1 (555) 000-0000",
        address: "123 Fashion Ave, New York, NY 10001",
        memberSince: "January 2024"
    })

    const [isEditing, setIsEditing] = useState(false)
    const [tempUser, setTempUser] = useState(user)

    const handleEditClick = () => {
        setTempUser(user)
        setIsEditing(true)
    }

    const handleSave = () => {
        setUser(tempUser)
        // Sync name to local storage and notify listeners
        localStorage.setItem("userName", tempUser.name.split(' ')[0]) // Store first name or full name as preferred, keeping "Test" logic
        window.dispatchEvent(new Event("user-updated"))
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black pb-8 mb-12 gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                            My Account
                        </h1>
                        <p className="text-muted-foreground uppercase tracking-widest text-xs font-medium">
                            Welcome back, {user.name.split(' ')[0]}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-none border-black hover:bg-black hover:text-white transition-all uppercase text-xs font-bold px-8 h-12"
                        asChild
                    >
                        <Link href="/login">
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="md:col-span-3 space-y-1">
                        <nav className="flex flex-col space-y-2">
                            <Button variant="ghost" className="justify-start rounded-none h-12 text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors" asChild>
                                <Link href="/">
                                    <Home className="w-4 h-4 mr-3" />
                                    Home
                                </Link>
                            </Button>
                            <Button variant="ghost" className="justify-start rounded-none h-12 text-sm uppercase tracking-wider font-medium bg-neutral-100 font-bold hover:bg-black hover:text-white transition-colors">
                                <User className="w-4 h-4 mr-3" />
                                Overview
                            </Button>
                            <Button variant="ghost" className="justify-start rounded-none h-12 text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors">
                                <Package className="w-4 h-4 mr-3" />
                                Orders
                            </Button>
                            <Button variant="ghost" className="justify-start rounded-none h-12 text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors">
                                <CreditCard className="w-4 h-4 mr-3" />
                                Payment Methods
                            </Button>
                            <Button variant="ghost" className="justify-start rounded-none h-12 text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors">
                                <Settings className="w-4 h-4 mr-3" />
                                Settings
                            </Button>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-9 space-y-12">

                        {/* Profile Details */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2">
                                    <span className="bg-black text-white px-2 py-1 text-xs">01</span> Profile Details
                                </h2>

                                <Dialog open={isEditing} onOpenChange={setIsEditing}>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-9 text-[10px] uppercase tracking-widest font-bold border-black hover:bg-black hover:text-white rounded-none"
                                            onClick={handleEditClick}
                                        >
                                            <Pencil className="w-3 h-3 mr-2" />
                                            Edit Details
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] rounded-none border-black [font-family:inherit]">
                                        <DialogHeader>
                                            <DialogTitle className="uppercase tracking-widest text-lg font-bold">Edit Profile</DialogTitle>
                                            <DialogDescription className="text-xs uppercase tracking-wider">
                                                Update your personal information here.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-6 py-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Name</Label>
                                                <Input
                                                    id="name"
                                                    value={tempUser.name}
                                                    onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                                                    className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={tempUser.email}
                                                    onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                                                    className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    value={tempUser.phone}
                                                    onChange={(e) => setTempUser({ ...tempUser, phone: e.target.value })}
                                                    className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="address" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Address</Label>
                                                <Input
                                                    id="address"
                                                    value={tempUser.address}
                                                    onChange={(e) => setTempUser({ ...tempUser, address: e.target.value })}
                                                    className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button
                                                variant="outline"
                                                onClick={handleCancel}
                                                className="rounded-none uppercase tracking-widest text-xs font-bold border-black hover:bg-muted"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                onClick={handleSave}
                                                className="rounded-none uppercase tracking-widest text-xs font-bold bg-black text-white hover:bg-black/80"
                                            >
                                                Save Changes
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted/20 p-8 border border-border">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Full Name</label>
                                    <p className="font-medium text-lg">{user.name}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email</label>
                                    <p className="font-medium text-lg">{user.email}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Phone</label>
                                    <p className="font-medium text-lg">{user.phone}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Address</label>
                                    <p className="font-medium text-lg">{user.address}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Member Since</label>
                                    <p className="font-medium text-lg">{user.memberSince}</p>
                                </div>
                            </div>
                        </section>

                        {/* Recent Orders Mock */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-2">
                                <span className="bg-black text-white px-2 py-1 text-xs">02</span> Recent Orders
                            </h2>
                            <div className="border border-border">
                                <div className="grid grid-cols-12 border-b border-border bg-muted/40 p-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                                    <div className="col-span-3">Order ID</div>
                                    <div className="col-span-3">Date</div>
                                    <div className="col-span-3">Status</div>
                                    <div className="col-span-3 text-right">Total</div>
                                </div>
                                <div className="divide-y divide-border">
                                    {[
                                        { id: "#LULLA-9928", date: "Jan 05, 2024", status: "Delivered", total: "$120.00" },
                                        { id: "#LULLA-8832", date: "Dec 12, 2023", status: "Processing", total: "$85.50" },
                                        { id: "#LULLA-7721", date: "Nov 28, 2023", status: "Delivered", total: "$240.00" },
                                    ].map((order) => (
                                        <div key={order.id} className="grid grid-cols-12 p-4 text-sm font-medium hover:bg-muted/10 transition-colors cursor-pointer group">
                                            <div className="col-span-3 group-hover:underline underline-offset-4">{order.id}</div>
                                            <div className="col-span-3 text-muted-foreground">{order.date}</div>
                                            <div className="col-span-3">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${order.status === 'Delivered'
                                                    ? 'border-green-200 text-green-700 bg-green-50'
                                                    : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="col-span-3 text-right">{order.total}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}
