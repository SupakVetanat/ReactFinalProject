import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import Cart from '../Components/Cart'

const CartPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Cart'} span={'Cart'}/>
              <InnerLayout>
                <Cart/>
                </InnerLayout>
             
    </MainLayout>
    </>
  )
}

export default CartPage