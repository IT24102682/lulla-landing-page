"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        // Simple mock authentication
        if (email === "admin@lulla.com" && password === "admin123") {
            router.push("/admin")
        } else {
            // For now, regular user login could redirect to home or show an error
            // router.push("/")
            alert("Invalid credentials. Try admin@lulla.com / admin123")
        }
    }

    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side - Marquee Animation */}
            <div className="hidden w-1/2 overflow-hidden bg-background md:flex items-center">
                <div className="flex whitespace-nowrap">
                    <div className="animate-marquee flex gap-8 py-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="text-[120px] font-bold uppercase tracking-tighter sm:text-[150px] lg:text-[200px]">
                                LOGIN
                            </span>
                        ))}
                    </div>
                    <div className="animate-marquee aria-hidden flex gap-8 py-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="text-[120px] font-bold uppercase tracking-tighter sm:text-[150px] lg:text-[200px]">
                                LOGIN
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex w-full flex-col justify-center bg-white px-8 py-12 md:w-1/2 lg:px-24">
                <div className="mx-auto w-full max-w-md space-y-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            LOGIN TO YOUR ACCOUNT TO ACCESS YOUR ORDER HISTORY AND OTHER PERSONALIZED FEATURES.
                        </h2>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                E-MAIL
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder=""
                                className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    PASSWORD
                                </Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground underline-offset-4 hover:underline"
                                >
                                    FORGOT PASSWORD?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="space-y-4 pt-4 group">
                            <Button type="submit" className="w-full h-12 text-xs font-bold rounded-none uppercase tracking-widest border border-transparent transition-all duration-300 transform bg-black text-white group-hover:bg-white group-hover:text-black group-hover:border-black hover:!bg-black hover:!text-white hover:!border-transparent hover:-translate-y-1 hover:shadow-lg active:scale-95">
                                Login
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full h-12 text-xs font-bold rounded-none uppercase tracking-widest border border-border transition-all duration-300 transform bg-transparent text-black hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 hover:shadow-md"
                                asChild
                            >
                                <Link href="/signup">Create Account</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
