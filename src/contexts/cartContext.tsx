import { ReactNode, createContext, useState } from "react";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

export interface ICartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  children: ReactNode
}

interface ICartContext {
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  getCartDetails: () => {
    items: Product[],
    total: number
  };
  itemAlreadyAdd: (id: string) => boolean
}


export const CartContext = createContext({} as ICartContext)

export default function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)

  function addItem(product: Product) {
    setCartItems([...cartItems, product])
    setTotalPrice(totalPrice + product.price)
  }

  function itemAlreadyAdd(id: string) {
    return cartItems.some((item) => item.id === id);
  }

  function removeItem(id: string) {
    const items = cartItems.filter((item) => item.id !== id)

    const productToRemove = cartItems.filter((item) => item.id === id)

    setCartItems(items)
    // setTotalPrice(totalPrice - (productToRemove[0].product.price * productToRemove[0].quantity))
  }

  function getCartDetails() {
    return {
      items: cartItems,
      total: totalPrice
    }
  }

  return (
    <CartContext.Provider value={{
      addItem,
      removeItem,
      getCartDetails,
      itemAlreadyAdd
    }}>
      {children}
    </CartContext.Provider>
  )
}