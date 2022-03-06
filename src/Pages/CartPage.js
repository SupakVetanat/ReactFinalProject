import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'

const CartPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Cart'} span={'Cart'}/>
              <InnerLayout>
                </InnerLayout>
             
    </MainLayout>
    </>
  )
}

export default CartPage