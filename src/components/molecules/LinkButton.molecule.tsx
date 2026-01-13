import { Button } from "@/atoms/index";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { ButtonProps } from "../atoms/Button.atom";

interface LinkButtonProps extends ButtonProps {
  href: string;
  className?: string;
  buttonClassName?: string;
  children: ReactNode;
  style?: CSSProperties;
  external?: boolean;
}

export const LinkButton = ({
  href,
  className,
  style,
  buttonClassName,
  children,
  external,
  ...rest
}: LinkButtonProps) => {
  const isExternal = external || href.startsWith("http") || href.startsWith("//");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          {...(buttonClassName ? { className: buttonClassName } : {})}
          {...rest}
        >
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      <Button
        {...(buttonClassName ? { className: buttonClassName } : {})}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};
