import React from "react";
const Hero = () => {
  return (
    <section className="text-center p-8">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Welcome to Tailwind World
      </h1>
      
      <button className="mt-6 bg-gray-200 rounded px-4 py-2 hover:bg-gray-300 active:bg-gray-400">
        Get Started
      </button>
    </section>
  );
};
export default Hero;