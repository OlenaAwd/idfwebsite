import { MouseEventHandler } from 'react';
import styles from './ButtonComponent.module.scss';

interface IButtonProps {
  children: string | JSX.Element;
  classes: string;
  size?: string;
  // onClick: () => void;
  onClick: MouseEventHandler;
  color: 'white' | string;
  disabled?: boolean;
  display?: string;
  type?: string;
}

const ButtonComponent = ({
  children,
  classes,
  onClick,
  disabled = false,
  display = '',
  color,
  type,
}: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${classes && classes} 
      ${color === 'red' ? styles.red : styles.white} 
      ${disabled && styles.disabled}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;
