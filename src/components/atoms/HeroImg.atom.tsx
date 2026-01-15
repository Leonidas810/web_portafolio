'use client'
import { Button, Icon } from "@/atoms/index"
import Image from "next/image"
import { useState } from "react"
import { ButtonItem } from "@/app/[locale]/page"
interface HeroImgProps {
    heroImgText: string[],
    heroButton: ButtonItem
}

export const HeroImg = ({ heroImgText, heroButton }: HeroImgProps) => {
    const [isAboutMeOpen, setAboutMeOpen] = useState<boolean>(false);

    return (
        <div
            className={`transform-3d transition-all bg-primary-600 border-white ${isAboutMeOpen ? "rotate-y-360 p-4" : "rotate-y-0 "} duration-500 border-4 z-10
                relative w-[320px] h-80 lg:w-112.5 lg:h-112.5 2xl:w-150 2xl:h-150`}
        >
            <div className={`absolute ${isAboutMeOpen ? "left-0 -translate-1/2 top-0" : "left-1/2 -translate-x-1/2 bottom-2"}  z-20`}>
                <Button size="md" onClick={() => setAboutMeOpen((p) => !p)} disabledOptions={{ hover: true }}>
                    {isAboutMeOpen ?
                        <>
                            <Icon className="ml-1" size="xl" name="close" />
                        </> :
                        <>
                            {heroButton.children}
                            <Icon className="ml-1" size="xl" name="user" />
                        </>}
                </Button>
            </div>
            <div className={`w-full h-full overflow-auto ${isAboutMeOpen ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
                <div className="text-white grid gap-y-6 text-base md:text-base 2xl:text-2xl">
                    {heroImgText.map((t, i) => <p key={i}>{t}</p>)}
                </div>
            </div>
            <Image
                className={`transition-opacity object-cover ${!isAboutMeOpen ? "opacity-100 z-10" : "opacity-0 -z-10"}`}
                src="/img/ProfileImg.webp"
                alt="Profile picture"
                fill
                sizes="(max-width: 640px) 320px,
                        (max-width: 1536px) 450px,
                        600px"
                priority
            />
        </div>
    )
}