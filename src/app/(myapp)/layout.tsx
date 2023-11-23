import Gnb from "@/components/Gnb"

export default function MyAppLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Gnb/>
        <div className="w-full p-6">{children}</div>
      </>
    )
  }