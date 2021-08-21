import classNames from 'classnames';
import LoadingSpinner from 'components/LoadingSpinner';
import { IStringChildrenProps } from 'types/props';
import css from './button.module.scss';

enum BUTTON_TYPE {
  primary = 'primary',
}

interface IProps extends IStringChildrenProps {
  className?: string;
  type?: keyof typeof BUTTON_TYPE;
  loading?: boolean;
  onClick: () => void;
}

const Button = ({ children, className, type = BUTTON_TYPE.primary, loading, onClick }: IProps) => {
  return (
    <button
      type='button'
      className={classNames(className, css.btn, css[type], { [css.loading]: loading })}
      onClick={onClick}
    >
      {children}
      {loading && (
        <div className={css.loadingWrapper}>
          <LoadingSpinner />
        </div>
      )}
    </button>
  );
};

export default Button;
