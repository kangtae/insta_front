import UserItem from "./UserItem";

export default function UpdateFriendsList() {
    return (
        <ul className="mt-4">
            {new Array(5).fill(1).map((el, idx) => (
                <li key={idx} className="mt-4 first:mt-0">
                    <UserItem
                        data={{
                            id: "사용자아이디",
                            name: "사용자 이름",
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}
