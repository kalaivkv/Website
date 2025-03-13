import React from 'react';
import Header1 from './Header1';
import Header2  from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Slider from './Slider';
import Slider2 from './Slider2';
import Products from './Products';
import Advertisement from './Advertisement';
import Footer from './Footer';
import HeaderContainer from './HeaderContainer';
import NewsletterPopup from './NewsletterPopup';
import Settings from './Settings';
import TopList from './TopList';
import Transport from './Transport';
import Arrival from './Arrival';
import NewOffer from './Newoffer';


const App = () => {
  return (
    <div>
      <NewsletterPopup/>
      <Settings/>
      <Header1/>
      <Header2/>
      <Header3/>
      <Header4/>  
      <Slider/>
      <Slider2/>
      <Products/>
      <Advertisement/>
      <Arrival/>
      <NewOffer/>
      <Transport/>
      <TopList/>
      <Footer/>
    </div>
  )
}

export default App
