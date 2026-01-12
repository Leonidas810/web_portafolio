'use client'
import Image from "next/image";

import { IconTypes } from "@/components/atoms/Icon/Icon";
import { useRef } from "react";

import { Button, Icon } from "@/components/atoms";
import { LinkButton } from "@/components/molecules";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {

  const textContainer = useRef<HTMLDivElement>(null)

  const Buttons: {
    text: string;
    icon: IconTypes;
    href?: string;
    className?: string;
  }[] = [
    {
      text: "About me",
      icon: "user",
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
      className: "col-span-2 sm:col-span-1",
    },
  ];

useGSAP(
  () => {
    gsap.from("h1, h2", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  },
  { scope: textContainer }
);

  return (
    <div className="h-dvh w-full bg-primary-500">
      <div className="h-full w-full grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 items-center justify-items-center">
        {/*Left */}
        <div>
          <div className="grid gap-y-10">
            <div ref={textContainer} className="text-white text-center sm:text-left">
              <h2 className="text-xl sm:text-3xl">
                Hello, I&apos;m Leonardo Lopez P.
              </h2>
              <h1 className="text-6xl sm:text-8xl">
                <b>Fullstack</b>
              </h1>
              <h1 className="text-primary-700 text-6xl sm:text-8xl">
                <b>Developer</b>
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
              {Buttons.map(
                (b, i) =>
                  b?.href ? (
                    <LinkButton key={i} href={b.href} {...b?.className ? {className:b.className} : {}} buttonClassName='w-full'>
                      {b.text}
                      <Icon name={b.icon} size="xl" className="ml-1" />
                    </LinkButton>
                  ) : (
                    <Button key={i} {...b?.className ? {className:b.className} : {}}>
                      {b.text}
                      <Icon name={b.icon} size="xl" className="ml-1"  />
                    </Button>
                  )
              )}
            </div>
          </div>
        </div>
        {/*Right */}
        <div>
          <div
            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[600px]
                bg-primary-600 border-4 border-white z-10"
          >
            <Image
              src="/img/ProfileImg.webp"
              alt="Profile picture"
              fill
              sizes="(max-width: 640px) 300px,
                    (max-width: 1024px) 350px,
                    (max-width: 1536px) 450px,
                    600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/*Background */}
        <div className="absolute top-0 left-1/2 bg-primary-700 w-1/3 h-1/3 hidden sm:block" />
        <div className="absolute right-0 top-1/5 bg-primary-600 w-1/5 h-1/3 hidden sm:block" />
        <div className="absolute bottom-1/5 left-0 sm:left-1/2 bg-primary-600 w-2/3 sm:w-1/3 h-1/3" />
        <div className="absolute bottom-0 right-0 sm:right-10 bg-primary-700 w-2/3 sm:w-1/3 h-1/3 sm:h-1/2" />
      </div>
    </div>
  );
}
