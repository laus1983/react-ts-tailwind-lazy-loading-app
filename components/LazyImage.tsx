import { useRef, useEffect, useState } from "react";
type Props = { image: string };

export const LazyImage = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isIntersecting, setIsIntersecting] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(image);
        }
      });
    });
    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, [image]);

  return (
    <div className="flex justify-center">
      <img
        ref={node}
        src={isIntersecting}
        alt="Random fox image"
        className="w-1/2 rounded bg-gray-300"
      />
    </div>
  );
};
