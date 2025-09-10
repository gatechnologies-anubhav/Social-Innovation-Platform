"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type FriendlyButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large";
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function FriendlyButton({
  children,
  variant = "primary",
  size = "medium",
  icon: Icon,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
}: FriendlyButtonProps) {
  const baseClasses =
    "font-bold rounded-full transition-all duration-200 bounce-hover bubble-shadow border-0";

  const variants: Record<string, string> = {
    primary: "fun-gradient text-white hover:shadow-lg transform hover:scale-105",
    secondary:
      "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50",
    white:
      "bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105",
  };

  const sizes: Record<string, string> = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      <div className="flex items-center justify-center space-x-2">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
      </div>
    </Button>
  );
}
