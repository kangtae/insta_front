import { SearchOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function serachPage(){
  return <>
    <div className="relative w-96 mx-auto">
      <div className="border border-gray-600 w-full h-[40px] p-2 rounded-3xl">
      <input type="text" className="w-80 border-none outline-none ml-2"/>
      <button className="rounded-full bg-slate-400 w-10 h-10 flex items-center justify-center absolute top-0 right-0">
        <SearchOutlined className="text-white"/>
      </button>
    </div>
      </div>
      
    <div>
      <div className="flex border-b-2 border-b-black justify-between pb-2 px-4 items-center">
        <h3 className="text-lg font-bold">사용자</h3>
        <Link href="/" className="text-sm">
          <span className="align-middle">전체보기</span>
          <RightOutlined className="align-middle text-xs ml-1"/>
        </Link>
      </div>
      <ul className="mt-3">
        {Array(4).fill("").map((_, idx) => <li className="mt-4 first:mt-0" key={idx}>
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <div className="flex flex-col justify-between">
              <div>
                <h3>asd1234</h3>
                <p>이름</p>
              </div>
            </div>
          </Link>
        </li>)}
      </ul>

      <div className="flex border-b-2 border-b-black justify-between pb-2 px-4 items-center mt-12">
        <h3 className="text-lg font-bold">게시물</h3>
        <Link href="/" className="text-sm">
          <span className="align-middle">전체보기</span>
          <RightOutlined className="align-middle text-xs ml-1"/>
        </Link>
      </div>
      <ul className="mt-3">
        {Array(4).fill("").map((_, idx) => <li className="mt-2 first:mt-0" key={idx}>
          <Link href="/" className="flex items-center">
            <div className="mr-3">해시태그</div>
            <div>해당 게시물 제목</div>
          </Link>
        </li>)}
      </ul>
    </div>
  </>
}