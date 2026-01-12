import { Card } from "@/molecules/index";
import { Page as PageTemplate } from "@/templates/index";

const Page = () => {
  const projectsMap:{
    img:{src:string,alt:string},
    title:string
    subTitle:string
    link:string
  }[] = [
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
          <h1 className="text-primary-700 text-4xl mb-4">Projects</h1>
          <p>Check out some of my latest projects</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-h-screen">
          {projectsMap.length === 0 && <p className="text-gray-400">Comming soon...</p>}
          {projectsMap.length > 0 && projectsMap.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
