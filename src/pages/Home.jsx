import React from 'react'
import { Slider } from '../components/Slider';
import { Deliveryinfo } from '../components/Deliveryinfo';
import { Homeproducts } from '../components/Homeproducts';
import { Footer } from '../components/Footer';



export const Home = () => {
  return (
    <div>
         <Slider/>
         <Deliveryinfo/>
         <p style={{ margin: '100px' }}></p>
         <h1 style={{ marginTop: '20px' }}>PREVIEW OUR ITEMS</h1>
         <Homeproducts/>
         <Footer/>

         
    </div>
  )
}

export default Home;