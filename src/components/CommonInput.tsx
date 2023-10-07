
interface Props {
	inputKey: string;
	inputType: string;
	placeholder: string;
	customStyle?: string;
	disabled: boolean;
	value: string;
	handleChange: (key: string, value: string) => void;
}


export default function commonInput(props: Props) {
	const {inputType,  placeholder, handleChange, inputKey, customStyle, disabled, value} = props;
	return <>
		<input type={inputType}
		       className={customStyle}
		       placeholder={placeholder}
		       disabled={disabled}
		       value={value}
		       onChange={(e)=>handleChange(inputKey,e.target.value)}
		/>
	</>;
}
