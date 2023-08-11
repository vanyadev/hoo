import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-xl overflow-hidden w-full relative pt-calculated">
      {children}
    </div>
  );
};

export default Card;
