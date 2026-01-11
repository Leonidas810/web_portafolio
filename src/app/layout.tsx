import "./globals.css"
import { Navigate } from "@/components/molecules"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navigate/>
        <main>{children}</main>
      </body>
    </html>
  )
}