interface LoginInputProps{
	inputType: string
	placeholder: string
	customStyle?: string
}

export default function LoginInput({inputType, placeholder, customStyle}:LoginInputProps){
	return <>
		<input type={inputType} placeholder={placeholder} className={customStyle} />
	</>
}