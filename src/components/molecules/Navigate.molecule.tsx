"use client";
import { Button, Icon } from "@/atoms/index";
import { LinkButton } from "@/molecules/index";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useWindowWidth } from "@/hooks";

export const Navigate = () => {
  const container  = useRef(null)
  const pathname = usePathname();

  const windowWidth = useWindowWidth() ?? 0;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenMenu = () => {
    setIsOpen(true);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  const onHandleMenu = () =>{
    setIsOpen((p)=>!p)
  }

  const commonClasses = `${
    isOpen ? "visible" : "invisible"
  } absolute transition-transform`;

  const isMobile = windowWidth < 640;
  const isHeroSection = pathname === '/'

  return (
    <div
      ref={container}
      hidden={isHeroSection}
      onMouseLeave={onCloseMenu}
      className="fixed w-full h-12 bottom-0 sm:top-6 bg-white sm:bg-transparent flex items-center z-10"
    >
      <div className="absolute left-1/2 -translate-x-1/2 w-1/4">
        <div className="relative flex items-center justify-center">
          <LinkButton
            href="/resume"
            className={`${commonClasses} left-1/4 ${
              isOpen ? "-translate-x-24 sm:-translate-x-16" : "translate-x-0"
            }`}
            disabled={pathname === "/resume"}
            variant={isMobile ? "primary" : "ghost"}
          >
            Resume
          </LinkButton>
          {isMobile && (
            <LinkButton
              href="/"
              className={`${commonClasses} left-1/4 ${
                isOpen ? "-translate-y-10" : "translate-y-0"
              }`}
              variant={'primary'}
            >
                <Icon name={'home'} />
            </LinkButton>
          )}
          {isMobile ? (
            <Button onClick={onHandleMenu}>
              <Icon name={isOpen ? 'close' : "menu"} />
            </Button>
          ) : (
            <LinkButton
              href="/"
              onMouseOver={onOpenMenu}
              variant="ghost"
              className={`${
                isOpen ? "rotate-360" : ""
              } z-10 transition-transform p-2 sm:p-0`}
            >
              <Icon name={isOpen ? "home" : "menu"} />
            </LinkButton>
          )}
          <LinkButton
            href="/projects"
            disabled={pathname === "/projects"}
            className={`link ${commonClasses} right-1/4 ${
              isOpen ? "translate-x-24 sm:translate-x-16" : "translate-x-0"
            }`}
            variant={isMobile ? "primary" : "ghost"}
          >
            Projects
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
