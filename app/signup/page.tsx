import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side - Marquee Animation */}
            <div className="hidden w-1/2 overflow-hidden bg-background md:flex items-center">
                <div className="flex whitespace-nowrap">
                    <div className="animate-marquee flex gap-8 py-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="text-[120px] font-bold uppercase tracking-tighter sm:text-[150px] lg:text-[200px]">
                                SIGN UP
                            </span>
                        ))}
                    </div>
                    <div className="animate-marquee aria-hidden flex gap-8 py-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="text-[120px] font-bold uppercase tracking-tighter sm:text-[150px] lg:text-[200px]">
                                SIGN UP
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex w-full flex-col justify-center bg-white px-8 py-12 md:w-1/2 lg:px-24">
                <div className="mx-auto w-full max-w-md space-y-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            CREATE A NEW ACCOUNT TO JOIN OUR COMMUNITY AND GET ACCESS TO EXCLUSIVE OFFERS, REWARDS AND CONTENT.
                        </h2>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    FIRST NAME
                                </Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    LAST NAME
                                </Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                E-MAIL
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                PASSWORD
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                className="border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-black rounded-none"
                            />
                        </div>

                        <div className="space-y-4 pt-4 group">
                            <Button className="w-full h-12 text-xs font-bold rounded-none uppercase tracking-widest border border-transparent transition-all duration-300 transform bg-black text-white group-hover:bg-white group-hover:text-black group-hover:border-black hover:!bg-black hover:!text-white hover:!border-transparent hover:-translate-y-1 hover:shadow-lg active:scale-95">
                                Create Account
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full h-12 text-xs font-bold rounded-none uppercase tracking-widest border border-border transition-all duration-300 transform bg-transparent text-black hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 hover:shadow-md"
                                asChild
                            >
                                <Link href="/login">Login</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
