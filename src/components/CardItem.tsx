"use client"

import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export default function CardItem(){
  const handleDelete = (id: number) => {

  }

  return <Link href="/">
    <div className="relative aspect-square">
        <Image src="/temp_img_2.jpeg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="mt-3">
        <div className="flex items-center">
          <HeartFilled />
          <p className="ml-1">친구1 외 120명이 좋아합니다</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p>댓글 총 0개</p>
          <button className="text-red-400" onClick={() => handleDelete(1)}>삭제</button>
        </div>
      </div>
  </Link>
}