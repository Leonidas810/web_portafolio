import { ExperienceInterface } from "@/types/resource/Experience.types";
import { EducationInterface } from "@/types/resource/Education.types";


type Pages = 'home' | 'resume' | 'projects'

type PagesKeys = 'sections'

export type SectionsOptions = 'others' | 'education' | 'technologies' | 'experience' | 'projects' | 'introduction'



type CommonContentMap = {
    labels: Record<string, string>
}

export type SectionContentMap = {
    education: EducationInterface[]
    experience: ExperienceInterface[]
    others: string[]
    technologies: string[]
    projects: string
    introduction: string | string[]
}

export type PageContentMap = {
    sections: Record<SectionsOptions, { title?: string, name?: string, subTitle?: string, content?: SectionContentMap[SectionsOptions] }>
}

export interface DictionarieInterface {
    commons: {
        labels: CommonContentMap['labels']
    }
    pages: Record<Pages, Record<PagesKeys, Partial<PageContentMap[PagesKeys]>>>
}