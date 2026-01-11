"use client";
import Link from "next/link";
import { Button, Icon } from "@/atoms/index";
import { LinkButton } from "@/molecules/index";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navigate = () => {
  const pathname = usePathname();
  if (pathname === "/") return;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOver = () => {
    setIsOpen(true);
  };

  const onLeave = () => {
    setIsOpen(false);
  };

  const commonClasses = `${isOpen ? "visible" : "invisible"} absolute transition-transform`;

  return (
    <div onMouseLeave={onLeave} className="absolute w-full">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1/4">
        <div className="relative flex items-center justify-center">
          <LinkButton
            href="/resume"
            className={`${commonClasses} left-1/4 ${
              isOpen ? "-translate-x-24 sm:-translate-x-16" : "translate-x-0"
            }`}
            disabled={pathname === "/resume"}
            variant="ghost"
          >
            Resume
          </LinkButton>
          <LinkButton
            href="/"
            onMouseOver={onOver}
            variant="ghost"
            className={`${isOpen ? "rotate-360" : ""} z-10 transition-transform`}
          >
            <Icon name={isOpen ? "home" : "menu"} />
          </LinkButton>
          <LinkButton
            href="/projects"
            disabled={pathname === "/projects"}
            className={`${commonClasses} right-1/4 ${
              isOpen ? "translate-x-24 sm:translate-x-16" : "translate-x-0"
            }`}
            variant="ghost"
          >
            Projects{" "}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
