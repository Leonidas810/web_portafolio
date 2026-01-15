import { Navigate, LanguageSelect } from "@/molecules/index";
import { DictionarieInterface } from "@/types/Dictonarie.type";
interface HeaderProps {
  dict: DictionarieInterface;
}

export const Header = ({ dict }: HeaderProps) => {
  return (
    <div className="fixed bottom-0 md:bottom-[90%] right-0 md:right-1/2 md:translate-x-1/2 h-full w-4 md:w-full z-10">
      <Navigate dict={dict} />
      <LanguageSelect dict={dict}/>
    </div>
  );
};
