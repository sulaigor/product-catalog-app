import { IProductParameter } from 'models/ProductParameter';
import css from './parameters.module.scss';

interface IProps {
  parameters: IProductParameter[];
  className?: string;
}

const Parameters = ({ parameters, className }: IProps) => {
  return (
    <ul className={className}>
      <li className={css.paramHeader}>Product parameters:</li>
      {parameters.map(({ name, value }, index) => (
        <li key={`param-item-${name}-${value}-${index}`} className={css.paramItem}>
          {name}: {value}
        </li>
      ))}
    </ul>
  );
};

export default Parameters;
