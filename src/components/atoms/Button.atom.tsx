import { Size } from "@/types/Common.types"

type Variant = "primary" | "solid" | "ghost";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: Variant
    size?: Size
    className?:string
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) => {
    const base = "cursor-pointer inline-flex items-center justify-center rounded-xl shadow-lg/15 font-bold transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ";

    const variantMap: Record<Variant, string> = {
        primary: "text-[#3A6D98] bg-white border border-blue-[#3A6D98] hover:bg-blue-50 active:bg-blue-100",
        solid: "text-white bg-blue-600 hover:bg-blue-700",
        ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
    };
    const sizeMap: Record<Size, string> = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl"

    };

    const classes = `${base} ${variantMap[variant]} ${sizeMap[size]} ${className}`

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}