
import './App.css';

import Card from "../src/components/Cards/Card";

import Img1 from "../src/assets/images/iphone15.jpg";

import Img2 from "../src/assets/images/Xiaomi-Redmi-Note-12-Pro.jpg";

import Img3 from "../src/assets/images/samsung a13-black.jpeg";



function App() {
  return (
    <div className="App">

   <Card card_title="Iphone 15" card_detail="600azn" Img={Img1} />  
   <Card card_title="xiaomi redmi 12" card_detail="400azn"  Img={Img2}   />  
   <Card card_title="Samsung 13" card_detail="300azn"  Img={Img3}  />  

    </div>
  );
}

export default App;
