import React from "react";
import Card from "./Card";

const Features = () => {
  const features = [
    { title: "Feature 1", desc: "Description of feature one." },
    { title: "Feature 2", desc: "Description of feature two." },
    { title: "Feature 3", desc: "Description of feature three." },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {features.map((f, i) => (
        <Card key={i} title={f.title} desc={f.desc} />
      ))}
    </section>
  );
};

export default Features;