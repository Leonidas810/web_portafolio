import { Size } from "@/types/Common.types"

import { type IconTypes, IconRecord } from "./Icon"

interface IconProps {
    name: IconTypes,
    className?: string,
    size?: Size
}

export const Icon = ({ name, size = 'md', className }: IconProps) => {

    const sizeMap: Record<Size, string> = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
    };

    const IconComponent = IconRecord[name];

    if (!IconComponent) return null;

    const classes = `${sizeMap[size]} ${className}`


    return <IconComponent className={classes} />;
};
