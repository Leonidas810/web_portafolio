"use client";

import { Button, Icon } from "@/atoms/index";
import { usePathname, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { isHomeRoute } from "@/utils/routing";

//<--Hooks-->
import { useScrollHeight, useWindowWidth } from "@/hooks";
import { LinkButton } from "./LinkButton.molecule";
import path from "path";

type Locale = "en" | "es";

interface LanguageSelectProps {
  dict: any;
}

export const LanguageSelect = ({ dict }: LanguageSelectProps) => {
  const scrollHeight = useScrollHeight();
  const windowWidth = useWindowWidth() ?? 0;

  const dictLabel = dict.commons.labels;
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const [isOpen, setIsOpen] = useState(false);
  const currentLocale: Locale = pathname.startsWith("/es") ? "es" : "en";

  const getPathWithLocale = (locale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "es") {
      segments.shift();
    }
    return `/${locale}/${segments.join("/")}`;
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };
    closeMenu();
  }, [pathname, windowWidth]);

  const isHome = isHomeRoute(pathname, locale);
  const isMobile = windowWidth < 768;
  const isSroll = scrollHeight > 0;

  return (
    <div className={`absolute right-5 ${isMobile ? "top-5" : "bottom-0"}`}>
      <Button
        variant={isHome ? "primary" : isSroll ? "primary" : "ghost"}
        size={isMobile ? "sm" : "md"}
        onClick={() => setIsOpen((p) => !p)}
        aria-expanded={isOpen}
      >
        <Icon size="sm" name={isOpen ? "downArrow" : "upArrow"} />
        <span className="ml-2 uppercase">{currentLocale}</span>
      </Button>

      <div className={`absolute right-0 mt-2 w-28 rounded-lg border-2 border-primary-700 bg-white shadow-lg transition-all duration-300 ease-out ${isOpen ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"}`}>
        <LinkButton
          disabledOptions={{ hover: true, rounded: true }}
          className="w-full"
          buttonClassName="w-full rounded-t-lg"
          variant="ghost"
          disabled={locale === "en"}
          href={getPathWithLocale("en")}
        >
          {dictLabel.english}
        </LinkButton>

        <LinkButton
          disabledOptions={{ hover: true, rounded: true }}
          className="w-full"
          buttonClassName="w-full rounded-b-lg"
          variant="ghost"
          disabled={locale === "es"}
          href={getPathWithLocale("es")}
        >
          {dictLabel.spanish}
        </LinkButton>
      </div>
    </div>
  );
};
