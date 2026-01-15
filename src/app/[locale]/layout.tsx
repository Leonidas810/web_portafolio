import "../globals.css";
import { TransitionProvider } from "@/providers/TransitionProvider";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { DictionarieInterface } from '@/types/Dictonarie.type'

import { Header } from "@/components/organism/index";

//<--Types-->
import { LayaoutInterface } from "./inteface";

export default async function LocaleLayout({
  children,
  params,
}: LayaoutInterface) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict: DictionarieInterface = await getDictionary(locale)

  return (
    <html lang={locale}>
      <body>
        <Header dict={dict} />
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}
