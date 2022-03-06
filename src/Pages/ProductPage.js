import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import Product from '../Components/Product'

const ProductPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Product'} span={'Product'}/>
              <InnerLayout>
                  <Product/>
                </InnerLayout>
             
    </MainLayout>
    </>
  )
}

export default ProductPage