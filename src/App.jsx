import React, { useState } from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header4 from "./components/Header4";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import Products from "./components/Products";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/NewsletterPopup";
import Settings from "./components/Settings";
import TopList from "./components/TopList";
import Transport from "./components/Transport";
import Arrival from "./components/Arrival";
import NewOffer from "./components/Newoffer";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#4fa078");

  return (
    <div>
      <NewsletterPopup />
      <Settings setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      <Header1 />
      <Header2 />
      <Header3 selectedColor={selectedColor} />
      <Header4 selectedColor={selectedColor} />
      <Slider selectedColor={selectedColor} />
      <Slider2 selectedColor={selectedColor} />
      <Products />
      <Advertisement selectedColor={selectedColor} />
      <Arrival selectedColor={selectedColor} />
      <NewOffer selectedColor={selectedColor} />
      <Transport selectedColor={selectedColor} />
      <TopList />
      <Footer />
    </div>
  );
};

export default App;
