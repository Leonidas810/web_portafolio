import { Icon } from "@/components/atoms";
import { LinkButton } from "@/components/molecules";
import { Page as PageTemplate } from "@/templates/index";
import Link from "next/link";


//<--Dictionarie-->
import { getDictionary } from "../dictionaries";

//<--Types-->
import { PageInterface } from "../inteface";
import {
  technologies,
  contactMap,
  type SectionsTypes,
  type SectionInterface,
  type SectionContentMap,
} from "./interface";


const Page = async ({ params }: PageInterface) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as "es" | "en");
  const dictLabels = dict.commons.labels;

  const { sections }: { sections: SectionInterface } = dict.pages.resume;

  const getTitle = (key: SectionsTypes): string | undefined => {
    if (!sections[key]?.title) return undefined;
    return sections[key].title;
  };

  const getContent = <K extends SectionsTypes>(
    key: K
  ): SectionContentMap[K] | undefined => {
    if (!sections[key]?.content) return undefined;
    return sections[key].content as SectionContentMap[K];
  };

  const classesTitle = "text-primary-700 font-bold text-lg";

  return (
    <PageTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] grid-rows-[auto] sm:grid-rows-1 gap-x-8">
        {/*Left */}
        <div className="grid row-start-2 sm:row-start-1 gap-y-8 sm:gap-y-2 max-h-[90vh] mt-8 sm:p-4">
          <h2 className="text-primary-700 hidden sm:block">
            Mexico, San Luis Potosi
          </h2>
          <h2 className={`${classesTitle} mb-2`}>
            {getTitle("technologies")}:{" "}
          </h2>
          <ol className="list-none sm:ml-1 text-sm">
            {technologies.map((s, i) => (
              <li
                className={`inline-block sm:block ${i < technologies.length - 1 ? "after:content-[',']" : ""
                  } sm:after:content-['']`}
                key={i}
              >
                {s}
              </li>
            ))}
          </ol>
          <h2 className={`${classesTitle} mb-2`}>{getTitle("others")}: </h2>
          <ol className="list-none ml-1 text-sm">
            {getContent("others")?.map((s, i) => (
              <li
                className={`inline-block sm:block ${i < (getContent("others")?.length ?? 0) - 1
                  ? "after:content-[',']"
                  : ""
                  } sm:after:content-['']`}
                key={i}
              >
                {s}
              </li>
            ))}
          </ol>
        </div>
        {/*Right */}
        <div className="grid gap-8 sm:gap-y-4">
          <div>
            <div className="flex justify-between mb-4">
              <div className="text-primary-700">
                <h1 className=" text-4xl">Leonardo López P.</h1>
                <h2 className="block sm:hidden">Mexico, San Luis Potosi</h2>
              </div>
              <LinkButton href="/pdf/cv.pdf" variant="ghost">
                <Icon name="download" />
                {dictLabels.download}
              </LinkButton>
            </div>
            <div className="flex mb-2">
              {contactMap.map((c, i) => (
                <LinkButton key={i} href={c.href} variant="ghost">
                  <Icon name={c.icon} size="xl" className="mr-2" />
                  {c.label}
                </LinkButton>
              ))}
            </div>
            <p>{getContent("introduction")}</p>
          </div>
          {/*Education */}
          <h1 className={`${classesTitle}`}>
            {getTitle("education")}:
          </h1>
          {getContent("education")?.map((e, i: number) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p>
                  <b className="text-primary-500">{e.name}</b> - GPA: {e.gap} /
                  100
                </p>
                <p className="text-gray-400">{e.date}</p>
              </div>
              <p className="text-gray-400">{e.institute}</p>
              {e?.relevantKnowledge?.length > 0 && (
                <p>
                  <b>{dict.commons.labels.relevantKnowledge}:</b>{" "}
                  {e.relevantKnowledge.map((k, i) => (
                    <span key={i}>
                      {k}
                      {i < e.relevantKnowledge.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
          <h1 className={`${classesTitle}`}>
            {getTitle("experience")}:
          </h1>
          {getContent("experience")?.map((e, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p>
                  <b className="text-primary-500">{e.institute}</b> - {e.name}
                </p>
                <p className="text-gray-400">{e.date}</p>
              </div>
              <p>{e.description}</p>
            </div>
          ))}
          <h1 className={`${classesTitle}`}>
            {getTitle("projects")}:
          </h1>
          <p>
            {getContent('projects')}{" "}
            <Link href="/projects" className="text-blue-500 underline">
              {dictLabels.projects}
            </Link>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
