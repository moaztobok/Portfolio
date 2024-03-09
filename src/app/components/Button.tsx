import React from "react";

const Button = ({
  label,
  icon,
  onClick = () => {},
}: {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className="hover:bg-primary-foreground/25 duration-200 transition-all min-w-32 py-2 px-4 text-primary border   border-primary  bg-primary-foreground/5 backdrop-blur-lg">
      {label}
    </button>
  );
};

export default Button;
