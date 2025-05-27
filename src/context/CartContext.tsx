    import { createContext, useContext, useState } from 'react';
    import type { ReactNode } from 'react';
    import type { Product, CartItem } from '../types';

    interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    resetCart: () => void;
    }

    const CartContext = createContext<CartContextType | undefined>(undefined);

    export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setItems(currentItems => {
        const existingItem = currentItems.find(item => item.product.id === product.id);
        
        if (existingItem) {
            return currentItems.map(item =>
            item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        }

        return [...currentItems, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) {
        removeFromCart(productId);
        return;
        }

        setItems(currentItems =>
        currentItems.map(item =>
            item.product.id === productId
            ? { ...item, quantity }
            : item
        )
        );
    };

    const resetCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, resetCart }}>
        {children}
        </CartContext.Provider>
    );
    }

    export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
    } 