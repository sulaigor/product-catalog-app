import { ReactNode } from 'react';
import classNames from 'classnames';
import Paragraph from 'components/Paragraph';
import css from './loadingSpinner.module.scss';

interface IProps {
  className?: string;
  children?: string | ReactNode;
}

const LoadingSpinner = ({ className, children }: IProps) => {
  return (
    <section className={classNames(css.loadingSpinner, className)}>
      <div className={css.loader} />
      {children && <Paragraph className={css.text}>{children}</Paragraph>}
    </section>
  );
};

export default LoadingSpinner;
