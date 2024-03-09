import React from "react";

const Button = ({
  label,
  icon,
}: {
  label?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <button className="hover:bg-primary-foreground/25 duration-200 transition-all min-w-32 py-2 px-4 text-primary border   border-primary  bg-primary-foreground/5 backdrop-blur-lg">
      {label} {icon ? icon : ""}
    </button>
  );
};

export default Button;
