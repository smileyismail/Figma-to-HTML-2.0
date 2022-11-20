import React from "react";

import Header from "./Components/Header";
import FloatingElements from "./Components/UI/FloatingElements";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="relative w-screen">
        <div className="absolute">
          <FloatingElements />
        </div>
        <div className="w-screen">
          <Hero />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
