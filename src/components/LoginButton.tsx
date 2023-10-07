import { Button } from "antd";

interface ILoginButtonProps {
    buttonType: "button" | "submit";
    buttonText: string;
    customStyle?: string;
}

export default function LoginButton({
    buttonType,
    buttonText,
    customStyle,
}: ILoginButtonProps) {
    return (
        <>
            <Button
                htmlType={buttonType}
                type="primary"
                size="large"
                className={`w-full ${customStyle}`}
            >
                {buttonText}
            </Button>
        </>
    );
}
