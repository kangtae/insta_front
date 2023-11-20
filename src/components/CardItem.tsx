import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";

export default function CardItem(){
  return <>
    <div>
      <div className="relative aspect-square">
        <Image src="/temp_img_2.jpeg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="mt-3">
        <div className="flex items-center">
          <HeartFilled />
          <p className="ml-1">친구1 외 120명이 좋아합니다</p>
        </div>
      </div>
    </div>
  </>
}