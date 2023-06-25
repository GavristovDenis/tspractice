//Блок тестовый для тренировки, в самом проекте выглядит неуместно,
//поэтому находится здесь исключительно для референса.
import { useState } from "react";

export enum CardVariants {
  outLined = "outlined",
  primary = "primary",
}

export interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild;
  variant: CardVariants;
  onClick: (num: number) => void;
}

export const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        border: variant === CardVariants.outLined ? "1px solid black" : "none",
        background: variant === CardVariants.primary ? "lightgrey" : " ",
        width,
        height,
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};
