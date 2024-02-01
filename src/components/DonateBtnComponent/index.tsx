import React, { useState, FC } from 'react';
import styles from './DonateBtnComponent.module.scss';

interface ButtonProps {
  classes?: string;
  label: string;
  value: string;
}

export const DonateBtnComponent: FC<ButtonProps> = ({
  classes,
  label,
  value,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log('isSelected', isSelected);
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.baseBtn} 
        ${isSelected ? styles.clicked : styles.base} 
        ${classes && classes}`}
          onClick={handleClick}
          value={value}
        >
          {label}
        </button>
      </div>
    </>
  );
};

// export const DonateBtnSummComponent: FC = () => {
//   const [activeButton, setActiveButton] = useState<string>('');

//   const handleButtonClick = (color: string, value: string) => {
//     setActiveButton(color);
//     console.log('value', value);
//   };
//   return (
//     <>
//       <div className={styles.btnContainer}>
//         {/* {donateBtnsData.map(item =>

//       </div>
//     </>
//   );
// };
