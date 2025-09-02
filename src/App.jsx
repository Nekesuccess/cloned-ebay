import React from 'react'
import EbayHeader from './Components/Header/EbayHeader'
import Trello from './Components/Header/Trello Header/Trello'
import ShoppingSite from './Components/Success.jsx/ShoppingSite'
import BestSellingBrands from './Components/Success.jsx/BestSellingBrands'
import Product from './Components/Chidinma.jsx/Product'
import Footer from './Components/Chidinma.jsx/Footer'

const App = () => {
  return (
    <div>
      <EbayHeader />
      <ShoppingSite />
      <BestSellingBrands />
      <Product/>
      <Footer />
      {/* <Trello /> */}
    </div>
  )
}

export default App
