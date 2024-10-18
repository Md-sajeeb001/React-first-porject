import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavigaitionBar";
import Herosection from "./components/Herosection";
import ShowMore from "./components/ShowMore";
import FooterSection from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <ShowMore />
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
