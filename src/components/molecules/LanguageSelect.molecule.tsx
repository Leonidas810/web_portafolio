"use client";

import { Button, Icon } from "@/atoms/index";
import { usePathname, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { isHomeRoute } from "@/utils/routing";
import { LinkButton } from "@/molecules/index";


//<--Hooks-->
import { useScrollHeight, useWindowWidth } from "@/hooks";

//<--Types-->
import { ParamsInterface } from "@/types/Params.types";
import { DictionarieInterface } from "@/types/Dictonarie.type";

interface LanguageSelectProps {
  dict: DictionarieInterface;
}

export const LanguageSelect = ({ dict }: LanguageSelectProps) => {
  const scrollHeight = useScrollHeight();
  const windowWidth = useWindowWidth() ?? 0;

  const dictLabel = dict.commons.labels;
  const pathname = usePathname();
  const { locale } = useParams<{ locale: ParamsInterface['locale'] }>();

  const [isOpen, setIsOpen] = useState(false);
  const currentLocale: ParamsInterface['locale'] = pathname.startsWith("/es") ? "es" : "en";

  const getPathWithLocale = (locale: ParamsInterface['locale']) => {
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
    <div className="absolute right-5 top-5 md:top-auto md:bottom-0">
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
