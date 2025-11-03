import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
