import s1 from "./assets/Snacks/s1.jpg";
import s2 from "./assets/Snacks/s2.jpg";
import s3 from "./assets/Snacks/s3.jpg";
import s4 from "./assets/Snacks/s4.jpg";
import s5 from "./assets/Snacks/s5.jpg";
import s6 from "./assets/Snacks/s6.jpg";
import s7 from "./assets/Snacks/s7.jpg";
import s8 from "./assets/Snacks/s8.jpg";
import s9 from "./assets/Snacks/s9.jpg";
import s10 from "./assets/Snacks/s10.jpg";

import f1 from "./assets/Fruits/f1.jpg";
import f2 from "./assets/Fruits/f2.jpg";
import f3 from "./assets/Fruits/f3.jpg";
import f4 from "./assets/Fruits/f4.jpg";
import f5 from "./assets/Fruits/f5.jpg";
import f6 from "./assets/Fruits/f6.jpg";
import f7 from "./assets/Fruits/f7.jpg";
import f8 from "./assets/Fruits/f8.jpg";
import f9 from "./assets/Fruits/f9.jpg";
import f10 from "./assets/Fruits/f10.jpg";

import v1 from "./assets/Vegetables/v1.jpg";
import v2 from "./assets/Vegetables/v2.jpg";
import v3 from "./assets/Vegetables/v3.jpg";
import v4 from "./assets/Vegetables/v4.jpg";
import v5 from "./assets/Vegetables/v5.jpg";
import v6 from "./assets/Vegetables/v6.jpg";
import v7 from "./assets/Vegetables/v7.jpg";
import v8 from "./assets/Vegetables/v8.jpg";
import v9 from "./assets/Vegetables/v9.jpg";
import v10 from "./assets/Vegetables/v10.jpg";




const productData = [
    // 10 Snack & Spices Products
    { name: "Crunchy Triangle Chips Snacks", category: "SNACK & SPICES", image: s1, price: 42.0, oldPrice: 55.0, rating: 4, sale: false, newArrival: true },
    { name: "Dates Value Fresh Pouch", category: "SNACK & SPICES", image: s2, price: 236.0, oldPrice: 262.0, rating: 5, sale: false },
    { name: "Californian Almonds Value Pack", category: "SNACK & SPICES", image: s3, price: 12.0, oldPrice: 15.0, rating: 4, sale: true },
    { name: "Natural Hub Cherry Karonda", category: "SNACK & SPICES", image: s4, price: 18.0, oldPrice: 22.0, rating: 3, sale: false },
    { name: "Berry & Graps", category: "SNACK & SPICES", image: s5, price: 12.0, oldPrice: 15.0, rating: 3, sale: true },
    { name: "Mixed Nuts Seeds & Berries Pack", category: "SNACK & SPICES", image: s6, price: 148.0, oldPrice: 162.0, rating: 5, sale: false },
    { name: "Mixed Nuts & Almonds Dry Fruits", category: "SNACK & SPICES", image: s7, price: 12.0, oldPrice: 15.0, rating: 4, sale: true },
    { name: "Smoked Honey Spiced Nuts", category: "SNACK & SPICES", image: s8, price: 18.0, oldPrice: 22.0, rating: 5, sale: false },
    { name: "Fresh Mango juice pack", category: "SNACK & SPICES", image: s9, price: 12.0, oldPrice: 15.0, rating: 4, sale: true },
    { name: "Healthy Nutmix, 200g Pack", category: "SNACK & SPICES", image: s10, price: 18.0, oldPrice: 22.0, rating: 5, sale: false },
    
  
    // 10 Fruits Products
    { name: "Apple", category: "FRUITS", image: f1, price: 199.0, oldPrice: 200.0, rating: 5, sale: true, newArrival: false },
    { name: "Kamalam Fruit", category: "FRUITS", image: f2, price: 20.0, oldPrice: 28.0, rating: 4, sale: false, newArrival: true },
    { name: "Blue Berry", category: "FRUITS", image: f3, price: 8.0, oldPrice: 12.0, rating: 3, sale: false, newArrival: false },
    { name: "Natural Hub Cherry Karonda", category: "FRUITS", image: f4, price: 7.0, oldPrice: 10.0, rating: 4, sale: false, newArrival: false },
    { name: "Fresh Mango juice pack", category: "FRUITS", image: f5, price: 12.0, oldPrice: 18.0, rating: 3, sale: true, newArrival: false },
    { name: "Fresh Organic Ginger Pack", category: "FRUITS", image: f6, price: 6.0, oldPrice: 9.0, rating: 4, sale: false, newArrival: true },
    { name: "Guava", category: "FRUITS", image: f7, price: 15.0, oldPrice: 22.0, rating: 5, sale: true, newArrival: false },
    { name: "Mango - Kesar", category: "FRUITS", image: f8, price: 18.0, oldPrice: 25.0, rating: 2, sale: false, newArrival: true },
    { name: "Pineapple", category: "FRUITS", image: f9, price: 14.0, oldPrice: 20.0, rating: 5, sale: false, newArrival: false },
    { name: "Banana", category: "FRUITS", image: f10, price: 10.0, oldPrice: 14.0, rating: 3, sale: false, newArrival: true },
   
  
    // 10 Vegetables Products 
    { name: "Tomato - Hybrid", category: "VEGETABLES", image: v1, price: 170.0, oldPrice: 195.0, rating: 3, sale: false, newArrival: false },
  { name: "Potato", category: "VEGETABLES", image: v2, price: 15.0, oldPrice: 20.0, rating: 5, sale: false, newArrival: true },
  { name: "Onion - Hybrid", category: "VEGETABLES", image: v3, price: 30.0, oldPrice: 45.0, rating: 3, sale: false, newArrival: false },
  { name: "Coriander Bunch", category: "VEGETABLES", image: v4, price: 7.0, oldPrice: 10.0, rating: 4, sale: false, newArrival: true },
  { name: "Capsicum - Red", category: "VEGETABLES", image: v5, price: 5.0, oldPrice: 8.0, rating: 4, sale: true, newArrival: false },
  { name: "Sweet Corn", category: "VEGETABLES", image: v6, price: 6.0, oldPrice: 9.0, rating: 5, sale: false, newArrival: false },
  { name: "Fresh Organic Ginger Pack", category: "VEGETABLES", image: v7, price: 9.0, oldPrice: 13.0, rating: 3, sale: true, newArrival: false },
  { name: "Lemon", category: "VEGETABLES", image: v8, price: 12.0, oldPrice: 16.0, rating: 4, sale: false, newArrival: true },
  { name: "Farm Eggs - Brown", category: "VEGETABLES", image: v9, price: 11.0, oldPrice: 14.0, rating: 3, sale: false, newArrival: true },
  { name: "Organic Fresh Broccoli", category: "VEGETABLES", image: v10, price: 14.0, oldPrice: 18.0, rating: 4, sale: false, newArrival: false },
  ];
  
  export default productData;
  