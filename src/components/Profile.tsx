import { EditOutlined, SettingOutlined } from "@ant-design/icons";

export default function Profile(){
  return (<div className="relative">
    <div className="flex items-center gap-5 pb-5 border-b border-b-gray-200">
      <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
      <div className="flex flex-col h-[100px] justify-between">
        <div>
          <h3>asd1234</h3>
          <p>이름</p>
        </div>
        
        <ul className="flex">
          <li className="text-sm">
            <strong className="font-bold">게시물</strong>
            <span className="ml-1">5 개</span>
          </li>
          <li className="relative ml-5 pl-5 text-sm before:absolute before:top-[5px] before:left-0 before:w-[1px] before:h-[10px] before:bg-black">
            <strong className="font-bold">친구</strong>
            <span className="ml-1">10 명</span>
          </li>
        </ul>
      </div>
    </div>

    <ul className="absolute top-1/2 right-5 translate-y-[-50%]">
      <li>
        <a href="/setting">
          <SettingOutlined className="text-3xl"/>
        </a>
      </li>
      <li className="mt-4">
        <a href="/write">
          <EditOutlined className="text-3xl"/>
        </a>
      </li>
    </ul>
  </div>)
}