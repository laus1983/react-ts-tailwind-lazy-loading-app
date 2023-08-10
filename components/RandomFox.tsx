type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <div className="flex justify-center">
      <img src={image} alt="Random fox image" className="w-1/2" />
    </div>
  );
};
