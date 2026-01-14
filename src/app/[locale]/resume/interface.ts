import { IconTypes } from "@/types/Icon.types";

export type SectionsTypes = 'others' | 'education' | 'technologies' | 'experience' | 'projects' | 'introduction'

export type SectionContentMap = {
    education: EducationInterface[]
    experience: ExperienceInterface[]
    others: string[]
    technologies: string[]
    projects: string
    introduction:string
}

export type SectionInterface = Record<SectionsTypes, { title?: string, content?: SectionContentMap[SectionsTypes] }>

interface EducationInterface {
    name: string,
    institute: string,
    "date": string,
    "gap": number,
    "relevantKnowledge": string[]
}

interface ExperienceInterface {
    "name": string,
    "date": string,
    "description": string,
    "institute": string
}

export const technologies: string[] = [
    "CSS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "php",
    "Laravel",
    "Git/Github",
    "MySQL",
    "MongoDB",
    "Docker"
]

export const contactMap: {
    label: string
    icon: IconTypes,
    href: string
}[] = [
        {
            label: 'Github',
            icon: 'github',
            href: 'https://github.com/Leonidas810'
        },
        {
            label: 'LinkedIn',
            icon: 'linkedin',
            href: 'https://www.linkedin.com/in/leonardo-lópez-pérez-1115a227a'
        }
    ]