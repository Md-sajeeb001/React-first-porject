import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavigaitionBar";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
