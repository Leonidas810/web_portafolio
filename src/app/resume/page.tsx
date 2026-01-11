"use client";
import { useState } from "react";
import { Button, Icon } from "@/components/atoms";
import { Page as PageTemplate } from "@/templates/index";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const technologies = [
    "CSS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "php",
    "Laravel",
    "Git/Github",
    "MySQL",
    "MongoDB",
    "Docker",
  ];

  const others = [
    "Figma",
    "Responsive Web Design",
    "Performance",
    "Optimization",
    "Sofware Testing",
  ];

  const classesTitle = "text-primary-700 font-bold text-lg";

  const educationMap: {
    name: string;
    institute: string;
    date: string;
    gap: number;
    relevantKnowledge: string[];
  }[] = [
    {
      name: "Bachelor’s Degree in Intelligent Systems Engineering",
      institute: "Universidad Autónoma de San Luis Potosí",
      date: "06/2020 – 06/2025",
      gap: 81.2,
      relevantKnowledge: [
        "Web and mobile development",
        "database management",
        "data structures",
        "object-oriented programming",
        "cybersecurity principles",
        "cryptography",
        "high-performance computing",
        "operating systems",
        "network design and implementation",
        "algorithmic complexity",
        "and applied development of computing projects.",
      ],
    },
  ];

  const experienceMap: {
    name: string;
    institute: string;
    date: string;
    description: string;
  }[] = [
    {
      name: "Full Stack Web Developer",
      date: "January 2025 - Present",
      description:
        "During my time at the organization, I strengthened my expertise in the MERN stack through hands-on development and continuous learning, guided by mentorship from experienced professionals. I also developed skills in Linux server administration and containerization, allowing me to deliver more scalable, reliable, and production-ready solutions.",
      institute: "CNS - IPICYT",
    },
    {
      name: "Intern",
      date: "October 2023 - November 2024",
      description:
        'I orchestrated and developed the frontend infraestructure, design and functionality for the proyect LNC-2023-124: "Formación de profesionales en el uso y gestión de herramientas tecnológicas de supercómputo y centro de datos para abordar problemas de impacto social"',
      institute: "CNS - IPICYT",
    },
  ];

  const onClickDownload = async () => {
    window.open("/pdf/cv.pdf");
  };

  return (
    <PageTemplate className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] grid-rows-[auto] sm:grid-rows-1 gap-x-8">
        {/*Left */}
        <div className="grid row-start-2 sm:row-start-1 gap-y-2 max-h-[90vh] p-4">
          <h2 className="text-primary-700">Mexico, San Luis Potosi</h2>
          <div>
            <h2 className={`${classesTitle}`}>Core Technologies: </h2>
            <ol className="list-none ml-1 text-sm">
              {technologies.map((s, i) => (
                <li
                  className={`inline-block sm:block ${
                    i < technologies.length - 1 ? "after:content-[',']" : ""
                  } sm:after:content-['']`}
                  key={i}
                >
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className={`${classesTitle}`}>Others: </h2>
            <ol className="list-none ml-1 text-sm">
              {others.map((s, i) => (
                <li
                  className={`inline-block sm:block ${
                    i < others.length - 1 ? "after:content-[',']" : ""
                  } sm:after:content-['']`}
                  key={i}
                >
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/*Right */}
        <div className="grid grid-cols-2 gap-8 sm:gap-y-4">
          <div className="col-span-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-primary-700 text-4xl">Leonardo López P.</h1>
              <Button
                disabled={isLoading}
                onClick={onClickDownload}
                variant="ghost"
              >
                <Icon name="download" />
                Download
              </Button>
            </div>
            <p>
              Focused on performance, maintainability, and user experience, I am
              committed to continuously learning the tools and practices needed
              to build reliable and scalable web solutions.
            </p>
          </div>
          <h1 className={`${classesTitle} col-span-2`}>Education:</h1>
          {educationMap.map((e, i) => (
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
          <h1 className={`${classesTitle} col-span-2`}>Experience:</h1>
          {experienceMap.map((e, i) => (
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
          <div className="col-span-2">
            <h1 className={`${classesTitle}`}>Projects:</h1>
            <p>Some of my work can be found on leo.com</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
