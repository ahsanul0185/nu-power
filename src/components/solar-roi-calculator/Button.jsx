import React from "react";

export function Button({ children, variant = "default", onClick, ...rest }) {
  const baseClass = "px-4 py-2 rounded focus:outline-none";
  const variantClass =
    variant === "outline"
      ? "border border-blue-500 text-blue-500 bg-white hover:bg-blue-50"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
