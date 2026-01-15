import { ParamsInterface } from "@/types/Params.types";

export interface PageInterface {
    params: { locale: ParamsInterface['locale'] }
}

export interface LayaoutInterface {
    children: React.ReactNode
    params: {
        locale: ParamsInterface['locale']
    }
}