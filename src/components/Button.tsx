import React from "react";
import { Button as ShadButton } from "./ui/button";
import { cn } from "@/lib/utils";
const Button = ({
  label,
  icon,
  className,
}: {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <ShadButton
      className={cn(
        "hover:bg-primary/25 rounded-none duration-200 transition-all min-w-32 py-2 px-4 text-primary border border-primary  bg-primary-foreground/5 backdrop-blur-lg",
        className
      )}
    >
      {label} {icon ? icon : ""}
    </ShadButton>
  );
};

export default Button;
