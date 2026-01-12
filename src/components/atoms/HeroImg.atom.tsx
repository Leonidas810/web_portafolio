import Image from "next/image"

interface HeroImgProps {
    aboutMeOpen: boolean
}

export const HeroImg = ({ aboutMeOpen }: HeroImgProps) => {

    const textArray: string[] = [
        'Passionate about technology and the creation of digital solutions that solve real-world problems.',
        'Experienced in building functional, scalable applications, working confidently across both frontend and backend development.',
        'Driven by continuous learning and constant improvement, always exploring new tools and technologies to deliver clean, efficient, and high-quality software.',
        '“Si puedes imaginarlo, puedes programarlo.” — Alejandro Taboada'
    ];


    return (
        <div
            className={`transform-3d transition-all bg-primary-600 border-white ${aboutMeOpen ? "rotate-y-360 p-4" : "rotate-y-0 "} duration-500 border-4 z-10
                relative w-[280px] h-[280px] sm:w-[280px] sm:h-[280px] lg:w-[450px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[600px]`}
        >
            <div className={`w-full h-full overflow-auto ${aboutMeOpen ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
                <div className="text-white grid gap-y-6 text-base md:text-base 2xl:text-2xl">
                    {textArray.map((t, i) => <p key={i}>{t}</p>)}
                </div>
            </div>
            <Image
                className={`transition-opacity object-cover ${!aboutMeOpen ? "opacity-100 z-10" : "opacity-0 -z-10"}`}
                src="/img/ProfileImg.webp"
                alt="Profile picture"
                fill
                sizes="(max-width: 640px) 280px,
                        (max-width: 1024px) 280px,
                        (max-width: 1536px) 450px,
                        600px"
                priority
            />
        </div>)
}