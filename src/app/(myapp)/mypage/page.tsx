import CardItem from "@/components/CardItem";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import fetchGet from "./libs/apis";

export default async function MypagePage() {
  const data = await fetchGet("posts/my-post");
  console.log("data", data);

  return (
    <div className="flex">
      <div className="w-full p-5">
        <Profile />

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 mt-5">
          {data.posts.map((el: IMyPost, idx: number) => (
            <CardItem key={idx} data={el} />
          ))}
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
