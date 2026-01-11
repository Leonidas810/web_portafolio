"use client";
import Link from "next/link";
import { Button, Icon } from "@/atoms/";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navigate = () => {
  const pathname = usePathname();
  if(pathname==='/')return

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOver = () => {
    setIsOpen(true);
  };

  const onLeave = () => {
    setIsOpen(false);
  };

  const commonClasses = `${isOpen ? "visible" : "invisible"} absolute`;

  return (
    <div onMouseLeave={onLeave} className="absolute w-full">
      <div className="absolute top-6 left-1/2 transition-transform -translate-x-1/2 w-1/4">
        <div className="relative flex items-center justify-center">
          <Button
            className={`${commonClasses} left-1/4 ${
              isOpen ? "-translate-x-16" : "translate-x-0"
            }`}
            disabled={pathname === "/resume"}
            variant="ghost"
          >
            <Link href="/resume">Resume</Link>
          </Button>
          <Button
            onMouseOver={onOver}
            variant="ghost"
            className={`${isOpen ? "rotate-360" : ""} z-10`}
          >
            <Link href="/">
              <Icon name={isOpen ? "home" : "menu"} />
            </Link>
          </Button>
          <Button
            disabled={pathname === "/projects"}
            className={`${commonClasses} right-1/4 ${
              isOpen ? "translate-x-16" : "translate-x-0"
            }`}
            variant="ghost"
          >
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
