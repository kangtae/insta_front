import { Input } from "antd";
import { ChangeEvent } from "react";

interface ILoginInputProps {
    inputType: string;
    placeholder: string;
    customStyle?: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginInput({
    inputType,
    placeholder,
    customStyle,
    handleChange,
}: ILoginInputProps) {
    return (
        <>
            <Input
                type={inputType}
                placeholder={placeholder}
                className={customStyle}
                onChange={handleChange}
            />
        </>
    );
}
