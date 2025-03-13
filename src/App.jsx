import React, { useState } from "react";
import Header1 from './Header1';
import Header2  from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Slider from './Slider';
import Slider2 from './Slider2';
import Products from './Products';
import Advertisement from './Advertisement';
import Footer from './Footer';
import NewsletterPopup from './NewsletterPopup';
import Settings from './Settings';
import TopList from './TopList';
import Transport from './Transport';
import Arrival from './Arrival';
import NewOffer from './Newoffer';


const App = () => {

  const [selectedColor, setSelectedColor] = useState("#4fa078");

  return (
    <div>
      <NewsletterPopup/>
      <Settings setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      <Header1/>
      <Header2/>
      <Header3 selectedColor={selectedColor}/>
      <Header4 selectedColor={selectedColor}/>  
      <Slider selectedColor={selectedColor}/>
      <Slider2 selectedColor={selectedColor}/>
      <Products/>
      <Advertisement selectedColor={selectedColor}/>
      <Arrival selectedColor={selectedColor}/>
      <NewOffer selectedColor={selectedColor} />
      <Transport selectedColor={selectedColor}/>
      <TopList/>
      <Footer/>
    </div>
  )
}

export default App
