import { ParamsInterface } from "@/types/Params.types";

export interface PageInterface {
    params: Promise<{ locale: ParamsInterface['locale'] }>
}

export interface LayaoutInterface {
    params: Promise<{ locale: string }>
    children: React.ReactNode
}