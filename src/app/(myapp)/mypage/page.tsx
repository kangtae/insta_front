import CardItem from "@/components/CardItem";
import Profile from "@/components/Profile";

export default function mypagePage(){
  return <>
    <Profile/>

    <div className="grid grid-cols-2 gap-4 mt-5">
      {Array(5).fill("").map((item, idx) => <CardItem key={idx}/>)}
    </div>
  </>
}