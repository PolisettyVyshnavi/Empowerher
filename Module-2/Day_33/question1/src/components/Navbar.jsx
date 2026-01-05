import React from "react";
const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 p-4 bg-white shadow">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Contact</a>
    </nav>
  );
};
export default Navbar;