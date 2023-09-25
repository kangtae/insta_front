
interface Props {
	inputKey: string;
	inputType: string;
	placeholder: string;
	customStyle?: string;
	handleChange: (key: string, value: string) => void;
}


export default function commonInput(props: Props) {
	const {inputType,  placeholder, handleChange, inputKey, customStyle} = props;
	return <>
		<input type={inputType}
		       className={customStyle}
		       placeholder={placeholder}
		       onChange={(e)=>handleChange(inputKey,e.target.value)}
		/>
	</>;
}
