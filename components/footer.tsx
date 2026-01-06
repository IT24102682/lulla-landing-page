import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 md:px-12 py-16 border-t border-background/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif tracking-widest">LULLA & CO.</h3>
          <p className="text-background/60 text-sm max-w-xs leading-relaxed">
            Honoring Sri Lankan heritage through quiet luxury and intentional design. Join us on our journey toward
            sustainable elegance.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-8 font-bold text-background/40">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Essentials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Archive
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-8 font-bold text-background/40">Support</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Care Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-8 font-bold text-background/40">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Pinterest
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Journal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-background/30">
        <p>© 2026 Lulla & Co. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
