import { Icon } from "@/components/atoms";
import { LinkButton } from "@/components/molecules";
import { Page as PageTemplate } from "@/templates/index";
import Link from "next/link";

import { technologies, contactMap, type SectionsTypes, type SectionInterface, type SectionContentMap } from "./interface";

import { getDictionary } from '../dictionaries'

const Page = async ({
  params
}: {
  params: { locale: string };
}) => {

  const { locale } = await params
  const dict = await getDictionary(locale as 'es' | 'en')

  const { sections }: { sections: SectionInterface } = dict.resume


  const getTitle = (key: SectionsTypes): string => {
    return sections[key].title
  }

  const getContent = <K extends SectionsTypes>(
    key: K
  ): SectionContentMap[K] => {
    if (!sections[key]?.content) return []
    return sections[key].content as SectionContentMap[K]
  }

  const classesTitle = "text-primary-700 font-bold text-lg";


  return (
    <PageTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] grid-rows-[auto] sm:grid-rows-1 gap-x-8">
        {/*Left */}
        <div className="grid row-start-2 sm:row-start-1 gap-y-8 sm:gap-y-2 max-h-[90vh] mt-8 sm:p-4">
          <h2 className="text-primary-700 hidden sm:block">Mexico, San Luis Potosi</h2>
          <h2 className={`${classesTitle} mb-2`}>{getTitle('technologies')}: </h2>
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
          <h2 className={`${classesTitle} mb-2`}>{getTitle('others')}: </h2>
          <ol className="list-none ml-1 text-sm">
            {getContent('others').map((s, i) => (
              <li
                className={`inline-block sm:block ${i < getContent('others').length - 1 ? "after:content-[',']" : ""
                  } sm:after:content-['']`}
                key={i}
              >
                {s}
              </li>
            ))}
          </ol>
        </div>
        {/*Right */}
        <div className="grid grid-cols-2 gap-8 sm:gap-y-4">
          <div className="col-span-2">
            <div className="flex justify-between mb-4">
              <div className="text-primary-700">
                <h1 className=" text-4xl">Leonardo López P.</h1>
                <h2 className="block sm:hidden">Mexico, San Luis Potosi</h2>
              </div>
              <LinkButton
                href="/pdf/cv.pdf"
                variant="ghost"
              >
                <Icon name="download" />
                {dict.buttons.download}
              </LinkButton>
            </div>
            <div className="flex mb-2">
              {contactMap.map((c, i) =>
                <LinkButton key={i}
                  href={c.href}
                  variant="ghost"
                >
                  <Icon name={c.icon} size="xl" className="mr-2" />{c.label}
                </LinkButton>)}
            </div>
            <p>
              Focused on performance, maintainability, and user experience, I am
              committed to continuously learning the tools and practices needed
              to build reliable and scalable web solutions.
            </p>
          </div>
          <h1 className={`${classesTitle} col-span-2`}>{getTitle('education')}:</h1>
          {getContent('education').map((e, i: number) => (
            <div key={i} className="col-span-2">
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
                  <b>Relevant Areas of Knowledge:</b>{" "}
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
          <h1 className={`${classesTitle} col-span-2`}>{getTitle('experience')}:</h1>
          {getContent('experience').map((e, i) => (
            <div key={i} className="col-span-2">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p>
                  <b className="text-primary-500">{e.institute}</b> - {e.name}
                </p>
                <p className="text-gray-400">{e.date}</p>
              </div>
              <p>{e.description}</p>
            </div>
          ))}
          <h1 className={`${classesTitle} col-span-2`}>{getTitle('projects')}:</h1>
          <p className="col-span-2">
            Some of my work can be found on{" "}
            <Link href="/projects" className="text-blue-500 underline">
              Projects
            </Link>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
