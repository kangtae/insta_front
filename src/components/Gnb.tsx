import Link from "next/link";
import Nav from "./Nav";
import BottomNav from "./BottomNav";

export default function Gnb(){
    return (<div className="flex flex-col justify-between w-1/5 h-screen p-3">
    <div>
        <h1 className="text-2xl font-bold">
            <Link href="/">REDET</Link>
        </h1>
        <Nav />
    </div>
    <BottomNav />
</div>)
}