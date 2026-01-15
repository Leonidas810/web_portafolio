import { Size } from "@/types/Common.types";

type Variant = "primary" | "solid" | "ghost";

interface DisabledOptions {
  hover?: boolean;
  rounded?:boolean;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabledOptions?: DisabledOptions;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabledOptions,
  ...props
}: ButtonProps) => {
  const base = `inline-flex items-center justify-center font-bold transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed disabled:scale-100 
  ${disabledOptions?.hover ? "" : "hover:scale-105"}
  ${disabledOptions?.rounded ? "" : "rounded-xl"}`
  ;

  const variantMap: Record<Variant, string> = {
    primary: "text-primary-700 bg-white border border-primary-700 shadow-lg/15 hover:bg-blue-50 active:bg-blue-100",
    solid: "text-white bg-blue-600 hover:bg-blue-700",
    ghost: "bg-transparent text-primary-700 hover:bg-blue-50",
  };
  const sizeMap: Record<Size, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const classes = `${base} ${variantMap[variant]} ${sizeMap[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
