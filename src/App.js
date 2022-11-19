import React from "react";
import Contact from "./Components/Contact";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import FloatingElements from "./Components/UI/FloatingElements";

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
        </div>
      </main>
    </>
  );
};

export default App;
