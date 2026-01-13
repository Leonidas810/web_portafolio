'use client'

import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

interface HeroIntroProps {
    name: string,
    title: string,
    subTitle: string
}

export const HeroIntro = ({
    name,
    title,
    subTitle
}: HeroIntroProps) => {

    const textContainer = useRef<HTMLDivElement>(null)

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

    const h1Classes = `text-6xl md:text-7xl lg:text-8xl`

    return (
        <div ref={textContainer} className="text-white text-center md:text-left z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl">
                {name}
            </h2>
            <h1 className={`${h1Classes}`}>
                <b>{title}</b>
            </h1>
            <h1 className={`text-primary-700 ${h1Classes}`}>
                <b>{subTitle}</b>
            </h1>
        </div>
    )
}