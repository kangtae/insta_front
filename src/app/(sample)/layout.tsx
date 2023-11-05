import Gnb from "@/components/Gnb"
import Sidebar from "@/components/Sidebar"

export default function SampleLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <Gnb/>
        <div className="w-full">{children}</div>
        <Sidebar />
        </>
    )
  }