"use client";

import styles from "./button.module.css";

interface ButtonProps {
  value: number | string;
  color?: string;
  onClick: (value: number) => void;
  onClickOperator?: (value: string) => void;
  onClickNumber?: (value: number) => void;
}

export default function Button({
  value,
  onClick,
  color = "white",
  onClickOperator,
  onClickNumber,
}: ButtonProps) {
  function handleClick(value: string | number) {
    if (color === "orange") {
      onClickOperator?(value);
    } else {
      onClickNumber?(value);
    }
  }

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}
