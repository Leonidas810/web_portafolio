import "../globals.css";
import { Navigate } from "@/components/molecules";
import { TransitionProvider } from "@/providers/TransitionProvider";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

//<--Types-->
import { RoutesInterface } from "@/types/resource/Routes.type";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale)
  const dictLabel = dict.commons.labels

  const routesMap: RoutesInterface[] = [
    {
      name: "resume",
      label: dictLabel.resume,
      href: "/resume",
    },
    {
      name: "projects",
      label: dictLabel.projects,
      href: "/projects",
    },
  ];

  return (
    <html lang={locale}>
      <body>
        <Navigate routes={routesMap}/>
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}
