import type { IconType } from "react-icons";
import { AiOutlineFileText, AiOutlineFolderOpen, AiOutlineUser, AiOutlineFolder } from "react-icons/ai";

type Types = 'user' | 'paper' | 'folder' | 'openFolder';

export const IconRecord: Partial<Record<Types, IconType>> = {
    user: AiOutlineUser,
    paper: AiOutlineFileText,
    folder: AiOutlineFolder,
    openFolder: AiOutlineFolderOpen
};
