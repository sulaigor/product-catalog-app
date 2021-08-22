import { IChildrenProps as IProps } from 'types/props';
import Footer from './Footer';
import css from './screen.module.scss';

const Screen = ({ children }: IProps) => {
  return (
    <>
      <main className={css.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Screen;
