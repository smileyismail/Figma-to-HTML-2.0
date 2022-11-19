import React from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import FloatingElements from "./Components/UI/FloatingElements";

const App = () => {
  return (
    <>
      <Header />
      <main className="relative w-screen">
        <div className="absolute -z-10">
          <FloatingElements />
        </div>
        <div className="w-screen">
          <Hero />
          <Services />
        </div>
      </main>
    </>
  );
};

export default App;
