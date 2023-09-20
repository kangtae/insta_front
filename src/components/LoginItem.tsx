import LoginInput from "./LoginInput";

interface LoginItemProps {
    label: string;
    inputType: string;
    placeholder: string;
    customStyle?: string;
    handleChange: any;
}

export default function LoginItem({
    label,
    inputType,
    placeholder,
    customStyle,
    handleChange,
}: LoginItemProps) {
    return (
        <>
            <div className="mt-3 first:mt-0">
                <h2>{label}</h2>
                <LoginInput
                    inputType={inputType}
                    placeholder={placeholder}
                    customStyle={`w-full h-8 mt-2 px-3 border border-[#ebebeb] ${customStyle}`}
                    handleChange={handleChange}
                />
            </div>
        </>
    );
}
