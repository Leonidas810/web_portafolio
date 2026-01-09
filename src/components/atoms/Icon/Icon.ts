import type { IconType } from "react-icons";
import { AiOutlineFileText, AiOutlineFolderOpen, AiOutlineUser, AiOutlineFolder } from "react-icons/ai";
import { RiFileDownloadFill } from "react-icons/ri";

export type IconTypes = 'user' | 'paper' | 'folder' | 'openFolder' | 'download';

export const IconRecord: Partial<Record<IconTypes, IconType>> = {
    user: AiOutlineUser,
    paper: AiOutlineFileText,
    folder: AiOutlineFolder,
    openFolder: AiOutlineFolderOpen,
    download:RiFileDownloadFill
};
