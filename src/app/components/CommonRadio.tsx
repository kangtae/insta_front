
type Props= {
	inputKey: string,
	inputType: string,
	placeholder: string,
	handleChange: (key: string, value: string) => void;
}


export default function commonInput(props: Props) {
	const {inputType,  placeholder, handleChange, inputKey} = props;
	console.log("key",inputKey)
	return <>
		<input type={inputType}
		       className="text-black"
		       placeholder={placeholder}
		       onChange={(e)=>handleChange(inputKey,e.target.value)}
		/>
	</>;
}
