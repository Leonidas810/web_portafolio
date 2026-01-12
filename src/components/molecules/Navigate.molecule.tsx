"use client";
import { Button, Icon } from "@/atoms/index";
import { LinkButton } from "@/molecules/index";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const closeMenu = () => {
      if (windowWidth && windowWidth > 640) setIsOpen(false)
    }
    closeMenu();
  }, [windowWidth])

  const isMobile = windowWidth < 640;
  const isHeroSection = pathname === "/";

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
        className: `${isMobile ? "block" : "hidden"}`
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

  return (
    <nav
      hidden={isHeroSection}
      className="fixed sm:absolute w-full h-full z-10"
    >
      <div
        {...!isMobile ? { onMouseLeave: onCloseMenu } : {}}
        className="absolute bottom-5 sm:bottom-[94%] right-0 sm:right-1/2 -translate-x-1/3 sm:translate-x-1/2 flex flex-col gap-y-2 items-end"
      >
        {/* Routes */}
        <ol className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex flex-col-reverse sm:flex-row items-end sm:items-center gap-y-2 sm:gap-x-16">
          {routesMap.map((r, i) => (
            <li key={i} {...r.className ? { className: r.className } : {}}>
              <LinkButton
                variant={isMobile ? 'primary' : 'ghost'}
                disabled={pathname === r.href}
                href={r.href}
                className={`transition-all duration-300 ease-out
                ${isOpen
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
        {isMobile ?
          <Button
            variant={'primary'}
            className={`z-20 ${isOpen
              ? "scale-100"
              : "scale-95"
              }`}
            onClick={onHandleMenu}>
            <Icon name={isOpen ? "close" : "menu"} />
          </Button> :
          <LinkButton onMouseOver={onOpenMenu} variant="ghost" className="z-20" buttonClassName={`${isOpen ? 'duration-300 rotate-360' : ""}`} href="/">
            <Icon name={isOpen ? "home" : "menu"} />
          </LinkButton>
        }
      </div>
    </nav>
  );
};
