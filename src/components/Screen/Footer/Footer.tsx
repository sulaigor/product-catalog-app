import Paragraph from 'components/Paragraph';
import { YEAR } from './const';
import css from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Paragraph className={css.text}>©{YEAR} Created with ✌ by Igor Šula</Paragraph>
    </footer>
  );
};

export default Footer;
