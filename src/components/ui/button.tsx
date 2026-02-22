import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-sm border border-transparent font-semibold uppercase tracking-[0.08em] text-[0.72rem] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground shadow-[4px_4px_0_rgba(5,12,22,0.45)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(5,12,22,0.45)]":
              variant === "default",
            "border-border bg-background/70 text-foreground hover:border-primary/60 hover:bg-accent/30":
              variant === "outline",
            "border-border/40 bg-transparent text-foreground hover:border-primary/50 hover:bg-accent/25":
              variant === "ghost",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-8 px-3 text-[0.68rem]": size === "sm",
            "h-11 px-6 text-[0.74rem]": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
