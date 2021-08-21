import classNames from 'classnames';
import { IStringChildrenProps } from 'types/props';
import css from './button.module.scss';

enum BUTTON_TYPE {
  primary = 'primary',
}

interface IProps extends IStringChildrenProps {
  className?: string;
  type?: keyof typeof BUTTON_TYPE;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, className, type = BUTTON_TYPE.primary, disabled, onClick }: IProps) => {
  return (
    <button
      type='button'
      className={classNames(className, css.btn, css[type], { [css.disabled]: disabled })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
