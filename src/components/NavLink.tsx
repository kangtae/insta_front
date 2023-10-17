import Link from "next/link";

interface IProps {
    data: {
        title: string;
        url: string;
        icon: JSX.Element;
    };
}

export default function NavLink({ data }: IProps) {
    return (
        <Link href={data.url} className="text-lg">
            <i className="mr-2 text-2xl">{data.icon}</i>
            {data.title}
        </Link>
    );
}
