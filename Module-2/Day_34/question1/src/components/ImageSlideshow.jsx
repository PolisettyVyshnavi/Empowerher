import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

const images = [
  "https://wallpapers.com/images/hd/pawan-kalyan-red-and-black-v78r04hfwy78pv9o.jpg",
  "https://tse2.mm.bing.net/th/id/OIP.UZj9CIvsUPepaOrixvxSqQHaHq?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://blogtobollywood.com/wp-content/uploads/2017/05/Prabhas-4.jpg",
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