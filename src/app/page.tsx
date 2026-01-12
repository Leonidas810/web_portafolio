'use client'
import { IconTypes } from "@/components/atoms/Icon/Icon";

import { Button, Icon, HeroIntro, HeroImg } from "@/components/atoms";
import { LinkButton } from "@/components/molecules";
import { Page as PageTemplate } from "@/templates/index"
import { useState } from "react";

export default function Page() {

  const [isAboutMeOpen, setAboutMeOpen] = useState<boolean>(false)

  const Buttons: {
    text: string;
    icon: IconTypes;
    href?: string;
    className?: string;
    onClick?: () => void
  }[] = [
      {
        text: "About me",
        icon: "user",
        onClick: () => setAboutMeOpen((p) => !p)
      },
      {
        text: "My resume",
        icon: "paper",
        href: "/resume",
      },
      {
        text: "My work",
        icon: "folder",
        href: "/projects",
        className: "col-span-2 md:col-span-1",
      },
    ];


  return (
    <PageTemplate className="h-dvh bg-primary-500">
      <div className="h-full w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 items-center justify-items-center">
        {/*Left */}
        <div>
          <div className="grid gap-y-10">
            <HeroIntro />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4 z-10">
              {Buttons.map(
                (b, i) =>
                  b?.href ? (
                    <LinkButton key={i} href={b.href} {...b?.className ? { className: b.className } : {}} buttonClassName='w-full'>
                      {b.text}
                      <Icon name={b.icon} size="xl" className="ml-1" />
                    </LinkButton>
                  ) : (
                    <Button  onClick={b.onClick} key={i} {...b?.className ? { className: b.className } : {}}>
                      {b.text}
                      <Icon name={b.icon} size="xl" className="ml-1" />
                    </Button>
                  )
              )}
            </div>
          </div>
        </div>
        {/*Right */}
        <div className="z-10">
          <HeroImg aboutMeOpen={isAboutMeOpen} />
        </div>
        {/*Background */}
        <div className="absolute top-0 left-1/2 bg-primary-700 w-1/3 h-1/3 hidden md:block" />
        <div className="absolute right-0 top-1/5 bg-primary-600 w-1/5 h-1/3 hidden md:block" />
        <div className="absolute bottom-1/5 left-0 md:left-1/2 bg-primary-600 w-2/3 md:w-1/3 h-1/3" />
        <div className="absolute bottom-0 right-0 md:right-10 bg-primary-700 w-2/3 md:w-1/3 h-1/3 md:h-1/2" />
      </div>
    </PageTemplate>
  );
}
