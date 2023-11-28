"use client";

import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

interface ICardItemProps {
  data: IMyPost;
}

/*
  필요한 데이터
  - 이미지 또는 영상 1개
  - 좋아요 1개 이상 시 좋아요 누른 유저명 1개
  - postURL => postId
*/

export default function CardItem({ data }: ICardItemProps) {
  // console.log("data", data);
  const handleDelete = (id: number) => {};

  const favoriteRender = (count: number) => {
    if (!count) return;

    if (count === 1) {
      return `${count}명이 좋아합니다.`;
    } else {
      return `친구 1 외 ${count - 1}명이 좋아합니다.`;
    }
  };

  return (
    <Link href={`mypage/${data.id}`}>
      <div className="relative aspect-square">
        <Image
          src="/temp_img_2.jpeg"
          alt=""
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="mt-3">
        <div className="flex items-center">
          <HeartFilled />
          {/* <p className="ml-1">친구1 외 {data.favoriteCount}명이 좋아합니다</p> */}
          <p className="ml-1">{favoriteRender(data.favoriteCount)}</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p>댓글 총 {data.replyCount}개</p>
          <button className="text-red-400" onClick={() => handleDelete(1)}>
            삭제
          </button>
        </div>
      </div>
    </Link>
  );
}
