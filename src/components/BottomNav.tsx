import { UserOutlined } from "@ant-design/icons";
import NavLink from "./NavLink";
import Link from "next/link";

export default function BottomNav() {
    return (
        <div className="flex flex-col">
            <NavLink
                data={{
                    title: "마이페이지",
                    url: "/mypage",
                    icon: <UserOutlined />,
                }}
            />
            <Link href="" className="mt-2 text-lg font-bold">
                로그아웃
            </Link>
        </div>
    );
}
