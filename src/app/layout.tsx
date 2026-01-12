import "./globals.css";
import { Navigate } from "@/components/molecules";
import { TransitionProvider } from "@/providers/TransitionProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigate />
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}
