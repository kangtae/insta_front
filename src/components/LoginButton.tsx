interface LoginButtonProps {
  buttonType: "button" | "submit";
  buttonText: string;
  customStyle?: string;
}

export default function LoginButton({
  buttonType,
  buttonText,
  customStyle,
}: LoginButtonProps) {
  return (
    <>
      <button
        type={buttonType}
        className={`w-full h-9 bg-slate-600 text-white ${customStyle}`}
      >
        {buttonText}
      </button>
    </>
  );
}
