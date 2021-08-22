import { Link as RRDLink } from 'react-router-dom';
import { IStringChildrenProps } from 'types/props';
import css from './link.module.scss';

interface IProps extends IStringChildrenProps {
  to: string;
}

const Link = ({ children, to }: IProps) => {
  const isExternalLink = to.includes('http');
  const commonProps = { children, className: css.link };

  return isExternalLink ? (
    <a {...commonProps} href={to} target='_blank' rel='noreferrer' />
  ) : (
    <RRDLink {...commonProps} to={to} />
  );
};

export default Link;
