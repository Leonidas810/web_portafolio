"use client";
import { Button, Icon } from "@/atoms/index";
import { LinkButton } from "@/molecules/index";
import { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import { isCurrentRoute, isHomeRoute } from "@/utils/routing";

//<--Hooks-->
import { useWindowWidth, useScrollHeight } from "@/hooks";

//<--Types-->
import { RoutesInterface } from "@/types/resource/Routes.type";
import { ParamsInterface } from "@/types/Params.types";

interface NavigateProps {
  dict: any;
}

export const Navigate = ({ dict }: NavigateProps) => {
  const dictLabel = dict.commons.labels;
  const windowWidth = useWindowWidth() ?? 0;
  const scrollHeight = useScrollHeight();

  const pathname = usePathname();
  const { locale } = useParams<{ locale: ParamsInterface['locale'] }>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };
    closeMenu();
  }, [windowWidth, pathname]);

  const isMobile = windowWidth < 768;
  const isHome = isHomeRoute(pathname, locale);
  const isSroll = scrollHeight > 0;

  const routesMap: RoutesInterface[] = [
    {
      name: "resume",
      label: dictLabel.resume,
      href: `resume`,
    },
    {
      name: "projects",
      label: dictLabel.projects,
      href: `projects`,
    },
    {
      name: "home",
      icon: "home",
      href: `/`,
      className: `${isMobile ? "block" : "hidden"}`,
    },
  ];

  return (
    <nav
      hidden={isHome}
      {...(!isMobile ? { onMouseLeave: ()=>setIsOpen(false) } : {})}
      className="absolute bottom-5 md:bottom-0 right-0 md:right-1/2 -translate-x-1/3 md:translate-x-1/2 flex flex-col gap-y-2 items-end"
    >
      {/* Routes */}
      <ol
        className="md:absolute md:left-1/2 md:-translate-x-1/2 
        flex flex-col md:flex-row items-end md:items-center gap-y-2 md:gap-x-16 h-full"
      >
        {routesMap.map((r, i) => (
          <li key={i} {...(r.className ? { className: r.className } : {})}>
            <LinkButton
              variant={isMobile ? "primary" : isSroll ? "primary" : "ghost"}
              disabled={isCurrentRoute(pathname, r.href, locale)}
              href={r.href}
              className={`transition-all duration-300 ease-out
                ${isOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              {r.label}
              {r?.icon && <Icon name={r.icon} />}
            </LinkButton>
          </li>
        ))}
      </ol>
      {/* Action menu */}
      {isMobile ? (
        <Button
          variant={"primary"}
          className={`${isOpen ? "scale-100" : "scale-95"}`}
          onClick={()=>setIsOpen((p) => !p)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </Button>
      ) : (
        <LinkButton
          onMouseOver={() => setIsOpen(true)}
          variant={isSroll ? "primary" : "ghost"}
          className="z-20"
          buttonClassName={`${isOpen ? "duration-300 rotate-360" : ""}`}
          href={`/${locale}`}
        >
          <Icon name={isOpen ? "home" : "menu"} />
        </LinkButton>
      )}
    </nav>
  );
};
