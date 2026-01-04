import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TableSection from "./components/TableSection";
import ContactForm from "./components/ContactForm";
import ListSection from "./components/ListSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <TableSection />
      <ContactForm />
      <ListSection />
    </div>
  );
}

export default App;