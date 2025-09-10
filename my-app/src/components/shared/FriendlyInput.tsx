"use client";

import React from "react";
import { Input } from "@/components/ui/input";

type FriendlyInputProps = {
  icon: React.ElementType;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  color: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  autoComplete?: string; // ✅ New prop
};


export default function FriendlyInput({
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  color = "blue",
  required = false,
  disabled = false,
  min,
  max,
  autoComplete, 
}: FriendlyInputProps) {
  const colorClasses: Record<string, string> = {
    blue: "border-blue-200 focus:border-blue-400 focus:ring-blue-100",
    green: "border-green-200 focus:border-green-400 focus:ring-green-100",
    yellow: "border-yellow-200 focus:border-yellow-400 focus:ring-yellow-100",
    purple: "border-purple-200 focus:border-purple-400 focus:ring-purple-100",
    pink: "border-pink-200 focus:border-pink-400 focus:ring-pink-100",
  };

  const iconColors: Record<string, string> = {
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };

  return (
    <div className="relative">
      {Icon && (
        <div
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${iconColors[color]} bounce-hover`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
   <Input
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={(e) => onChange(e.target.value)}
  required={required}
  disabled={disabled}
  min={min}
  max={max}
  autoComplete={autoComplete}   // ✅ ab error nahi aayega
  className={`
    ${Icon ? "pl-12" : "pl-4"} pr-4 py-3 text-lg rounded-2xl border-2 bg-white
    ${colorClasses[color]}
    bubble-shadow transition-all duration-200
    placeholder-gray-400 font-medium
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `}
/>

    </div>
  );
}
