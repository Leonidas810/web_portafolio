import { Button } from "@/atoms/index";
import Link from "next/link";

import { ButtonProps } from "../atoms/Button.atom";

interface LinkButtonProps extends ButtonProps  {
    href:string
    className?:string,
    buttonClassName?:string,
    children:React.ReactNode
}

export const LinkButton = ({
    href,
    className,
    buttonClassName,
    children,
    ...rest
}:LinkButtonProps) => {
  return (
    <Link href={href} className={className}>
      <Button
        {...buttonClassName ? {className:buttonClassName} : {}}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};
