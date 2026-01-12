import { Button } from "@/atoms/index";
import Link from "next/link";

import { ButtonProps } from "../atoms/Button.atom";
import { CSSProperties } from "react";

interface LinkButtonProps extends ButtonProps  {
    href:string
    className?:string,
    buttonClassName?:string,
    children:React.ReactNode
    style?:CSSProperties
}

export const LinkButton = ({
    href,
    className,
    style,
    buttonClassName,
    children,
    ...rest
}:LinkButtonProps) => {
  return (
    <Link href={href} className={className} style={style}>
      <Button
        {...buttonClassName ? {className:buttonClassName} : {}}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};
