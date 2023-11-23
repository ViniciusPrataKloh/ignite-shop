'use client'

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { Bag, X } from "phosphor-react"
import { CartFooter, DialogClose, DialogContent, DialogContentEmpty, DialogOverlay, DialogTrigger, ImageContainer, ProductCart } from "./styles"

import axios from "axios"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/cartContext"
import { priceFormat } from "../../lib/priceFormat"
import CartButtonComponent from "../cartButton"

export default function DialogComponent() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState<boolean>(false)
  const { getCartDetails, removeItem } = useContext(CartContext)

  const { items, total } = getCartDetails()

  const isCartEmpty = items.length === 0 ? true : false

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        // priceId: product.defaultPriceId
        products: items
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert(error)
    }
  }

  return (
    <>
      <Dialog.Root>
        <DialogTrigger asChild>
          <div>
            <CartButtonComponent variant="gray" />
            {items.length > 0 ? <span>{items.length}</span> : <></>}
          </div>
        </DialogTrigger>

        <Dialog.Portal>
          <DialogOverlay />


          {
            isCartEmpty
              ? <DialogContentEmpty>
                <DialogClose>
                  <X size={24} />
                </DialogClose>

                <div>
                  <p>Parece que o seu carrinho está vazio!</p>
                  <Bag size={32} />
                </div>
              </DialogContentEmpty>

              : <DialogContent>
                <main>
                  <DialogClose>
                    <X size={24} />
                  </DialogClose>

                  <h2>Sacola de compras</h2>

                  <section>
                    {
                      items.map((item) => {
                        return (
                          <ProductCart key={item.id}>
                            <ImageContainer>
                              <Image src={item.imageUrl} alt="" width={94} height={94} />
                            </ImageContainer>

                            <div>
                              <span>{item.name}</span>
                              <strong>{priceFormat(item.price)}</strong>
                              <button onClick={() => removeItem(item.id)}>Remover</button>
                            </div>
                          </ProductCart>
                        )
                      })
                    }
                  </section>
                </main>

                <CartFooter>
                  <div>
                    <span>Quantidade</span>
                    <span>{items.length} itens</span>
                  </div>

                  <div>
                    <strong>Valor total</strong>
                    <strong>{priceFormat(total)}</strong>
                  </div>

                  <button onClick={() => handleBuyProduct()}>Finalizar Compra</button>
                </CartFooter>
              </DialogContent>
          }

        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}