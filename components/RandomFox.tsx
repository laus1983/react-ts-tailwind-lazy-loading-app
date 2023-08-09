const getRandomInt = () => Math.floor(Math.random() * 123) + 1; //Generar un numero aleatorio entre 1 y 123

export const RandomFox = (): JSX.Element => {
  const image = `https://randomfox.ca/images/${getRandomInt()}.jpg`; //Generar la url de la imagen
  return (
    <div className="flex justify-center">
      <img src={image} alt="Random fox image" className="w-1/2" />
    </div>
  );
};
