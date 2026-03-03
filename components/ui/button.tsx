"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-forest-700 text-white shadow-md hover:bg-forest-800 hover:shadow-lg hover:-translate-y-0.5",
        secondary:
          "bg-cream-100 text-forest-800 border border-forest-200 hover:bg-cream-200 hover:-translate-y-0.5",
        outline:
          "border-2 border-forest-700 text-forest-700 bg-transparent hover:bg-forest-700 hover:text-white hover:-translate-y-0.5",
        ghost:
          "text-forest-700 hover:bg-forest-50 hover:text-forest-800",
        link: "text-forest-700 underline-offset-4 hover:underline p-0 h-auto",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        white:
          "bg-white text-forest-800 shadow-md hover:bg-cream-100 hover:shadow-lg hover:-translate-y-0.5",
        "outline-white":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-forest-800 hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-lg",
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base rounded-2xl",
        xl: "h-14 px-10 text-lg rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
