import { UserOutlined } from "@ant-design/icons";

interface IProps {
    data: { id: string; name: string };
}

export default function UserItem({ data }: IProps) {
    return (
        <div className="flex items-center relative">
            <i className="flex items-center justify-center absolute top-0 left-0 w-10 h-10 rounded-full bg-slate-500">
                <UserOutlined className="text-2xl text-slate-300" />
            </i>
            <div className="pl-12">
                <p className="text-sm font-bold">{data.id}</p>
                <p className="text-sm">{data.name}</p>
            </div>
        </div>
    );
}
