import { Navigate, LanguageSelect } from "@/molecules/index";

interface HeaderProps {
  dict: any;
}

export const Header = ({ dict }: HeaderProps) => {

  return (
    <div className="fixed bottom-0 right-0 md:top-16 md:left-1/2 md:-translate-x-1/2 h-full md:h-1 w-4 md:w-full z-10">
      <Navigate dict={dict} />
      <LanguageSelect dict={dict}/>
    </div>
  );
};
