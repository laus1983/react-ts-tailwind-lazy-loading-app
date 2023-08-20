"use client"; //Directiva que configura el componente como cliente

// import Image from "next/image";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "../components/LazyImage";
import { random } from "lodash";

// const getRandomInt = () => Math.floor(Math.random() * 123) + 1; //Generar un numero aleatorio entre 1 y 123
const getRandomInt = () => random(1, 123); //Generar un numero aleatorio entre 1 y 123 con la libreria lodash

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
    <main className="flex flex-col items-center">
      <div className="container-info">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Component Lazy Loading Image
        </h1>
        <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl dark:text-white">
          Componente elaborado con React, Typescript y Tailwind que permite
          cargar imagenes de zorros de forma lazy desde la api
          https://randomfox.ca/
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          onClick={addNewFox}
        >
          Cargar nueva imagen
        </button>
      </div>
      {images.map(({ id, url }, index) => (
        <div className="p-4" key={id}>
          <LazyImage
            src={url}
            onClick={() => console.log("Random Fox")} //Prueba del onClick en la imagen para el caso de una proxima  implementacion.
            onLazyLoad={(img) => {
              console.log(`Image #${index + 1} cargada. Nodo:`, img); //Prueba del onLazyLoad para el caso de una proxima implementacion.
            }}
          />
        </div>
      ))}
    </main>
  );
}
