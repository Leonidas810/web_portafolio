import { Button, Icon, HeroIntro, HeroImg } from "@/components/atoms";
import { LinkButton } from "@/components/molecules";
import { Page as PageTemplate } from "@/templates/index";

//<--Dictionaries-->
import { getDictionary } from "./dictionaries";

//<--Types-->
import { type PageInterface } from "@/types/Page.types";
import { type IconTypes } from "@/types/Icon.types";
import { type ButtonTypes, DefaultButtonConfig } from "@/types/Button.types";
import { type LinkButtonProps } from "@/components/molecules/LinkButton.molecule";
import { type ButtonProps } from "@/components/atoms/Button.atom";

type ButtonItem =
  | (ButtonProps & { key: ButtonTypes; icon: IconTypes })
  | (LinkButtonProps & { key: ButtonTypes; icon: IconTypes });

export default async function Page({ params }: PageInterface) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "es" | "en");
  const dictLabels = dict.commons.labels
  const dictHeroIntro = dict.pages.hero.sections.intro
  const dictHeroImg = dict.pages.hero.sections.imgText

  const Buttons: ButtonItem[] = [
    {
      key: "myResume",
      children: dictLabels["myResume"],
      ...DefaultButtonConfig["myResume"],
    },
    {
      key: "myWork",
      children: dictLabels["myWork"],
      ...DefaultButtonConfig["myWork"],
    },
    {
      className: "col-span-2 lg:col-span-1",
      key: "aboutMe",
      children: dictLabels["aboutMe"],
      ...DefaultButtonConfig["aboutMe"],
    },
  ];

  return (
    <PageTemplate className="h-dvh w-dvw overflow-auto bg-primary-500">
      <div className="h-full w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 items-center justify-items-center">
        {/*Left */}
        <div>
          <div className="grid gap-y-10">
            <HeroIntro {...dictHeroIntro} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 z-10">
              {Buttons.map((b) => {
                const { key, icon, children } = b;
                const href = "href" in b ? b.href : null;
                return href ? (
                  <LinkButton
                    key={key}
                    href={href}
                    buttonClassName="w-full"
                    {...(b?.className ? { className: b.className } : {})}
                  >
                    {children}
                    <Icon name={icon} size="xl" className="ml-1" />
                  </LinkButton>
                ) : (
                  <Button
                    key={key}
                    onClick={b.onClick}
                    {...(b?.className ? { className: b.className } : {})}
                  >
                    {children}
                    <Icon name={icon} size="xl" className="ml-1" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        {/*Right */}
        <div className="z-10">
          <HeroImg heroImgText={dictHeroImg} />
        </div>
        {/*Background */}
        <div className="absolute top-0 left-1/2 bg-primary-700 w-1/3 h-1/3 hidden md:block" />
        <div className="absolute right-0 top-1/5 bg-primary-600 w-1/5 h-1/3 hidden md:block" />
        <div className="absolute bottom-1/5 left-0 md:left-1/2 bg-primary-600 w-2/3 md:w-1/3 h-1/3" />
        <div className="absolute bottom-0 right-0 md:right-10 bg-primary-700 w-2/3 md:w-1/3 h-1/3 md:h-1/2" />
      </div>
    </PageTemplate>
  );
}
