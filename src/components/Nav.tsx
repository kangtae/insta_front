import Link from "next/link";
import {
    HomeFilled,
    SearchOutlined,
    UserOutlined,
    EditOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import NavLink from "./NavLink";

const NAV_DATA = [
    { title: "홈", url: "/", icon: <HomeFilled /> },
    { title: "검색", url: "/search", icon: <SearchOutlined /> },
    { title: "내 친구", url: "/friends", icon: <UserOutlined /> },
    { title: "게시물 올리기", url: "/upload", icon: <EditOutlined /> },
    { title: "대화하기", url: "/chat", icon: <CommentOutlined /> },
];

export default function Nav() {
    return (
        <>
            <ul className="mt-6">
                {NAV_DATA.map((el) => {
                    return (
                        <li key={el.title} className="mt-4 first:mt-0">
                            <NavLink data={el} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
