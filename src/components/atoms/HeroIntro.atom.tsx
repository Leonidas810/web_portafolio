"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useParams } from "next/navigation";

interface HeroIntroProps {
  name: string;
  title: string;
  subTitle: string;
}

export const HeroIntro = ({ name, title, subTitle }: HeroIntroProps) => {
  const textContainer = useRef<HTMLDivElement>(null);
  const { locale } = useParams<{ locale: 'es' | 'en' }>();
  
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
    <div
      ref={textContainer}
      className="text-white text-center md:text-left z-10"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl">{name}</h2>
      <h1 className={`${locale === 'es' ? "text-5xl md:text-6xl lg:text-7xl" : "text-6xl md:text-7xl lg:text-8xl"}`}>
        <b>{title}</b>
      </h1>
      <h1 className={`text-primary-700 text-6xl md:text-7xl lg:text-8xl`}>
        <b>{subTitle}</b>
      </h1>
    </div>
  );
};
