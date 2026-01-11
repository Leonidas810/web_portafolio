import { Card } from "@/molecules/";

const Page = () => {
  const projectsMap = [
    {
      img: { src: "/img/image.png", alt: "Project img" },
      title: "Airplan price checker",
      subTitle: "Web app",
      link: "",
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid p-12 sm:p-16 gap-y-4">
        <div>
          <h1 className="text-primary-700 text-4xl mb-2">Projects</h1>
          <p>Check out some of my latest projects</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-h-screen">
          {projectsMap.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
