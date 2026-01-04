import React from "react";

const ListSection = () => {
  return (
    <section className="p-4">
      <ul className="list-disc list-inside pl-5">
        <li className="hover:text-blue-600">Item One</li>
        <li className="hover:text-blue-600">Item Two</li>
        <li className="hover:text-blue-600">Item Three</li>
      </ul>
    </section>
  );
};

export default ListSection;