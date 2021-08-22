import { useState } from 'react';
import imagePlaceholder from 'assets/images/imagePlaceholder.json';
import css from './image.module.scss';

interface IProps {
  url: string;
  alt: string;
}

const Image = ({ url, alt }: IProps) => {
  const [isLoaded, setLoaded] = useState(false);
  const currentImageSrc = isLoaded ? url : imagePlaceholder.data;

  return <img className={css.image} src={currentImageSrc} alt={alt} onLoad={() => setLoaded(true)} />;
};

export default Image;
