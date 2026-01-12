"use client";
import { Button, Icon } from "@/atoms/index";
import { LinkButton } from "@/molecules/index";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { useWindowWidth } from "@/hooks";

import { IconTypes } from "@/atoms/Icon/Icon";

export const Navigate = () => {
  const pathname = usePathname();

  const windowWidth = useWindowWidth() ?? 0;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenMenu = () => {
    setIsOpen(true);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  const onHandleMenu = () => {
    setIsOpen((p) => !p);
  };

  const routesMap: {
    name: string;
    label?: string;
    icon?: IconTypes;
    href: string;
    className?: string;
  }[] = [
    {
      name: "home",
      icon: "home",
      href: "/",
    },
    {
      name: "resume",
      label: "Resume",
      href: "/resume",
    },
    {
      name: "projects",
      label: "Projects",
      href: "/projects",
    },
  ];

  const commonClasses = `${
    isOpen ? "visible" : "invisible"
  } absolute transition-transform`;

  const isMobile = windowWidth < 640;
  const isHeroSection = pathname === "/";

  return (
    <nav
      hidden={isHeroSection}
      className="fixed sm:absolute w-full h-full z-10"
    >
      <div
        onMouseLeave={onCloseMenu}
        className="absolute h-auto w-auto top-5 sm:bottom-5 right-1/2 sm:right-5 translate-x-1/2 flex flex-col gap-y-2 items-end"
      >
        {/* Routes */}
        <ol className="flex flex-col-reverse items-end gap-y-2">
          {routesMap.map((r, i) => (
            <li key={i}>
              <LinkButton
                href={r.href}
                className={`transition-all duration-300 ease-out
                ${
                  isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                }`}
              >
                {r.label}
                {r?.icon && <Icon name={r.icon} />}
              </LinkButton>
            </li>
          ))}
        </ol>
        {/* Action menu */}
        <Button onClick={onHandleMenu}>
          <Icon name={isOpen ? "close" : "menu"} />
        </Button>
      </div>
    </nav>
  );
};
