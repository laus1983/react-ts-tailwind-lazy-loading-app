"use client"; //Directiva que configura el componente como cliente

// import Image from "next/image";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "../components/LazyImage";

const getRandomInt = () => Math.floor(Math.random() * 123) + 1; //Generar un numero aleatorio entre 1 y 123

const generateId = () => Math.random().toString(36).substr(2, 9); //generar un id unico para cada imagen

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageInfo>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImage: IFoxImageInfo = {
      id: generateId(),
      url: `https://randomfox.ca/images/${getRandomInt()}.jpg`,
    };

    setImages([...images, newImage]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Component Lazy Loading Image
      </h1>
      <button onClick={addNewFox}>Cargar nueva imagen</button>
      {images.map(({ id, url }, index) => (
        <div className="p-4" key={id}>
          <LazyImage
            src={url}
            onClick={() => console.log("Random Fox")}
            onLazyLoad={(img) => {
              console.log(`Image #${index + 1} cargada. Nodo:`, img);
            }}
          />
        </div>
      ))}
    </main>
  );
}
