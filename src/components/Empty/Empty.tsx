import { IStringChildrenProps as IProps } from 'types/props';
import Title from 'components/Title';
import SadEmoticon from './SadEmoticon';
import css from './empty.module.scss';

const Empty = ({ children }: IProps) => {
  return (
    <div className={css.wrapper}>
      <Title>{children}</Title>
      <SadEmoticon />
    </div>
  );
};

export default Empty;
