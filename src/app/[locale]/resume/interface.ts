import { ExperienceInterface } from "@/types/resource/Experience.types";
import { EducationInterface } from "@/types/resource/Education.types";
import { ContactInterface } from "@/types/resource/Contact.types";

export type SectionsTypes = 'others' | 'education' | 'technologies' | 'experience' | 'projects' | 'introduction'

export type SectionContentMap = {
    education: EducationInterface[]
    experience: ExperienceInterface[]
    others: string[]
    technologies: string[]
    projects: string
    introduction: string
}

export type SectionInterface = Record<SectionsTypes, { title?: string, content?: SectionContentMap[SectionsTypes] }>

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

export const contactMap: ContactInterface[] = [
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