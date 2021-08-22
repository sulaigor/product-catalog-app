import { Link as RRDLink } from 'react-router-dom';
import { IStringChildrenProps } from 'types/props';
import css from './link.module.scss';

interface IProps extends IStringChildrenProps {
  to: string;
}

const Link = ({ children, to }: IProps) => {
  return (
    <RRDLink className={css.link} to={to}>
      {children}
    </RRDLink>
  );
};

export default Link;
