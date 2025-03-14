import React, { useState, useEffect } from "react";
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
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

   useEffect(() => {
       document.documentElement.classList.toggle("dark", theme === "dark");
       localStorage.setItem("theme", theme); 
     }, [theme]);

  return (
    <div className={`min-h-screen transition-all ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`} >
      <NewsletterPopup />
      <Settings setSelectedColor={setSelectedColor} selectedColor={selectedColor} setTheme={setTheme} theme={theme}/>
      <Header2 theme={theme}/>
      <Header3 selectedColor={selectedColor} theme={theme} />
      <Header4 selectedColor={selectedColor} theme={theme} />
      <Slider selectedColor={selectedColor} theme={theme}/>
      <Slider2 selectedColor={selectedColor} />
      <Products theme={theme}/>
      <Advertisement selectedColor={selectedColor} />
      <Arrival selectedColor={selectedColor} />
      <NewOffer selectedColor={selectedColor} />
      <Transport selectedColor={selectedColor} theme={theme} />
      <TopList theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
