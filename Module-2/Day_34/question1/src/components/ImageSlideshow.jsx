import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardContent className="flex justify-center">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="rounded shadow transition-transform duration-300 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={prev}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </CardFooter>
    </Card>
  );
}