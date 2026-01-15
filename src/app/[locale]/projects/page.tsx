import { Card } from "@/molecules/index";
import { Page as PageTemplate } from "@/templates/index";

//<--Dictionarie-->
import { getDictionary } from "../dictionaries";

//<--Types-->
import { PageInterface } from "../inteface";
import { type ProjectsInterface } from "@/types/resource/Projects.types";

const Page = async ({ params }: PageInterface) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as "es" | "en");
  const dictLabels = dict.commons.labels;
  const dictProjects = dict.pages.projects

  const projectsMap: ProjectsInterface[] = [
    /*     {
      img: { src: "/img/image.png", alt: "Project img" },
      title: "Airplan price checker",
      subTitle: "Web app",
      link: "",
    }, */
  ];

  return (
    <PageTemplate className="bg-white">
      <div className="grid gap-y-4">
        <div>
          <h1 className="text-primary-700 text-4xl mb-4">
            {dictLabels.projects}
          </h1>
          <p>{dictProjects.sections.introduction.content}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-h-screen">
          {projectsMap.length === 0 && (
            <p className="text-gray-400">{dictLabels.commingSoon}...</p>
          )}
          {projectsMap.length > 0 &&
            projectsMap.map((p, i) => <Card key={i} {...p} />)}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
