import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg' alt=''/>
       
       <div className='home__row'>
        <Product
        id = "12321341"
        title="The lean startup:How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5}
        />
        <Product 
        id="49538094" 
        title="Kenwood kMix stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
        price={239.0}
        image="https://images-na.ssl-images-amazon.com/images/I/51nLbXnvKyS.__AC_SY300_SX300_QL70_ML2_.jpg"
        rating={4}/>

        
       </div>

       <div className='home__row'>
       <Product 
        id ="4903850"
        title="Samsung 32' Odyssey G3 Ultrawide Gaming"
        price={229}
        image="https://m.media-amazon.com/images/I/81HHYmwTpQL._AC_SX450_.jpg"
        rating={5}/>
       <Product 
        id ="23445930"
        title="BENGOO G9000 Stereo Gaming Headset for"
        price={39.9}
        image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
        rating={3}/>
       <Product
        id="3254354345"
        title="Razer Basilisk V3 Customizable"
        price={79.99}
        image="https://m.media-amazon.com/images/I/61JKqNxaZkL._AC_SL1500_.jpg"
        rating={4}/>
        
       </div>

       <div className='home__row'>
        < Product
        id ="90829332"
         title="Razer BlackWidow V3 Mechanical Gaming Keyboard: Green Mechanical Switches - Tactile & Clicky - Chroma RGB Lighting - Compact Form Factor - Programmable Macro"
         price={79.99}
         image="https://m.media-amazon.com/images/I/81-+oewJgQL._AC_SL1500_.jpg"
         rating={5} />
    
       </div>
      
      
      </div>
      
    </div>
  )
}

export default Home
