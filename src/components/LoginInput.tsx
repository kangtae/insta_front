interface LoginInputProps {
    inputType: string;
    placeholder: string;
    customStyle?: string;
    handleChange: any;
}

export default function LoginInput({
    inputType,
    placeholder,
    customStyle,
    handleChange,
}: LoginInputProps) {
    return (
        <>
            <input
                type={inputType}
                placeholder={placeholder}
                className={customStyle}
                onChange={handleChange}
            />
        </>
    );
}
