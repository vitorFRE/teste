import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex h-[68px] shrink-0 cursor-pointer items-center justify-center gap-[10px] rounded-[14px] border border-black px-[35px] py-0 font-normal text-type-h4-dsk leading-normal tracking-normal transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        outline:
          "bg-transparent text-black hover:bg-white hover:text-black active:scale-[0.99]",
        dark: "bg-black text-white hover:bg-white hover:text-black active:scale-[0.99]",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
