import classNames from 'classnames';
import { IChildrenProps } from 'types/props';
import css from './center.module.scss';

interface IProps extends IChildrenProps {
  className?: string;
}

const Center = ({ children, className }: IProps) => {
  return <div className={classNames(css.centerWrapper, className)}>{children}</div>;
};

export default Center;
