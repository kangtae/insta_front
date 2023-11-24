import CardItem from "@/components/CardItem";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

export default function mypagePage(){
  return <div className="flex">
    <div className="w-full p-5">
      <Profile/>

      <div className="grid grid-cols-2 gap-x-4 gap-y-7 mt-5">
        {Array(5).fill("").map((item, idx) => <CardItem key={idx}/>)}
      </div>
    </div>

    <Sidebar/>
  </div>
}