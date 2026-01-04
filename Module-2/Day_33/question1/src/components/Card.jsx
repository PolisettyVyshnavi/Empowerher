import React from "react";

const Card = ({ title, desc }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default Card;