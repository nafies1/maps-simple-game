import React from "react";
import "./App.css";
import MapsPage from "./components/MapsPage";
import NavbarPage from "./components/Navbar";
import FooterPage from "./components/Footer";

function App() {
  return (
    <div className='App container'>
      <NavbarPage />
      <MapsPage />
      <FooterPage />
    </div>
  );
}

export default App;
