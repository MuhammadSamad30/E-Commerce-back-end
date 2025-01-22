import Products from '@/components/Products'
import ShopBanner from '@/components/Shop.ban'
import React from 'react'

const productListing = () => {
  return (
    <div>
      <ShopBanner/>
        <Products/>
    </div>
  )
}

export default productListing