"use client";

import * as React from "react";
import { SearchIcon, X } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const [value, setValue] = React.useState("");

    const clearInput = () => setValue("");
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        console.log(value);
      }
    };

    return (
      <div className="relative flex items-center justify-between px-4 text-white rounded-3xl w-full bg-gray-800 hover:bg-gray-800/80">
        <SearchIcon className="text-gray-400" />
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex h-9 w-full rounded-md border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-0 ${className}`}
          ref={ref}
          {...props}
          placeholder="Buscar..."
        />
        {value && (
          <X
            className="hover:cursor-pointer hover:rotate-90 transition-transform duration-300"
            onClick={clearInput}
          />
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
