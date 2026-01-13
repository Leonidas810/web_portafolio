import "../globals.css";
import { Navigate } from "@/components/molecules";
import { TransitionProvider } from "@/providers/TransitionProvider";
import { notFound } from 'next/navigation';
import { hasLocale } from "./dictionaries";

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const { locale } = await params;
  if (!hasLocale(locale)) notFound()


  return (
    <html lang={locale}>
      <body>
        <Navigate />
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}
