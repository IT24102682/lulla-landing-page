import { ProductCard } from '@/components/product-card'
import { AddProductForm } from '@/components/add-product-form'
import { getProducts } from './actions'

export default async function InventoryPage() {
    const products = await getProducts()

    return (
        <div className="min-h-screen bg-background">
            {/* Header and Add Button */}
            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">Inventory</h1>
                        <p className="text-muted-foreground">
                            Manage your curated collection.
                        </p>
                    </div>
                    <AddProductForm />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground border border-dashed rounded-lg">
                        No products found in inventory.
                    </div>
                )}
            </div>
        </div>
    )
}
