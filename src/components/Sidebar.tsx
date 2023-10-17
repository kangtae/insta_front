import UpdateFriendsList from "./UpdateFriendsList";
import UserItem from "./UserItem";

export default function Sidebar() {
    return (
        <div className="w-1/4 p-3">
            <UserItem data={{ id: "사용자아이디", name: "사용자 이름" }} />
            <div className="mt-6 pt-4 border-t border-gray-200">
                <h4>업데이트한 친구</h4>
                <UpdateFriendsList />
            </div>
            <ul className="mt-8 text-gray-200 text-xs list-disc">
                <li>사업자등록번호 : 000-00-000</li>
                <li>REDET컴퍼니</li>
                <li>대표이사 : ooo </li>
                <li>TEL : 0000-0000 </li>
                <li>ⓒ2023 REDET comlieny All Rights Reserved. </li>
                <li>서울특별시 강남구 역삼동</li>
            </ul>
        </div>
    );
}
