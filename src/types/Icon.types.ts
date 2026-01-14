import type { IconType } from "react-icons";
import { AiOutlineFileText, AiOutlineFolderOpen, AiOutlineUser, AiOutlineFolder, AiOutlineExport, AiOutlineMenu, AiFillHome, AiOutlineCloseCircle } from "react-icons/ai";
import { RiFileDownloadFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";


export type IconTypes = 'user' | 'paper' | 'folder' | 'openFolder' | 'download' | 'url' | 'menu' | 'home' | 'close' | 'github' | 'linkedin';

export const IconRecord: Partial<Record<IconTypes, IconType>> = {
    user: AiOutlineUser,
    paper: AiOutlineFileText,
    folder: AiOutlineFolder,
    openFolder: AiOutlineFolderOpen,
    download: RiFileDownloadFill,
    url: AiOutlineExport,
    menu: AiOutlineMenu,
    home: AiFillHome,
    close: AiOutlineCloseCircle,
    github: RiGithubFill,
    linkedin: RiLinkedinBoxFill
};
