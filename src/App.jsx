import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Services />
      <Feature />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
