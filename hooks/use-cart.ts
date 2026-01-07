
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
    id: string
    name: string
    price: string
    image: string
    size: string
}

interface CartStore {
    items: CartItem[]
    addItem: (data: CartItem) => void
    removeItem: (id: string, size: string) => void // Remove specific size variant
    removeAll: () => void
}

export const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: CartItem) => {
                const currentItems = get().items
                // Basic duplicate check could be added here if needed, keeping it simple for now
                set({ items: [...get().items, data] })
            },
            removeItem: (id: string, size: string) => {
                set({ items: [...get().items.filter((item) => !(item.id === id && item.size === size))] })
            },
            removeAll: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
