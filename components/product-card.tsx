import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductProps {
  id: string
  name: string
  price: string
  image: string
}

export function ProductCard({ id, name, price, image }: ProductProps) {
  return (
    <Link href={`/product/${id}`}>
      <Card className="group border-none bg-transparent shadow-none overflow-hidden cursor-pointer">
        <CardContent className="p-0 space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary/20">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-serif">{name}</h3>
            <p className="text-sm font-medium text-muted-foreground">{price}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
