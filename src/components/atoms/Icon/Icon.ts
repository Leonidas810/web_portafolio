import type { IconType } from "react-icons";
import { AiOutlineFileText, AiOutlineFolderOpen, AiOutlineUser, AiOutlineFolder } from "react-icons/ai";

export type IconTypes = 'user' | 'paper' | 'folder' | 'openFolder';

export const IconRecord: Partial<Record<IconTypes, IconType>> = {
    user: AiOutlineUser,
    paper: AiOutlineFileText,
    folder: AiOutlineFolder,
    openFolder: AiOutlineFolderOpen
};
