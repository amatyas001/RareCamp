import React from 'react';
import styles from 'styles/letterpic.module.css';

// three different buttons, default is `primary`
type Color = 'primary' | 'secondary' | 'tertiary' | 'custom';
// three different sizes, default is `md`
type Size = 'sm' | 'md' | 'lg' | 'xs' | 'custom';
type TextColor = 'purple' | 'blue';
type LetterPicProps = {
  letter: string;
  className?: string | null;
  color?: Color;
  size: Size;
  textColor?: TextColor;
};

const LetterPic = ({
  letter,
  className,
  color = 'primary',
  size = 'md',
  textColor = 'purple',
}: LetterPicProps) => {
  const btnClassses = `lp ${className} ${
    color === 'custom' ? null : styles[`letterpic-${color}`]
  } ${size === 'custom' ? null : styles[`letterpic-${size}`]}`;

  return (
    <li className={btnClassses}>
      <span
        className={`m-auto ${styles[`lettercolor-${textColor}`]}`}
      >
        {letter}
      </span>
    </li>
  );
};
export default LetterPic;