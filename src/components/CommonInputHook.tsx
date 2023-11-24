
/*interface Props {
	inputKey: string;
	inputType: string;
	placeholder: string;
	customStyle?: string;
	disabled: boolean;
	value: string;
	handleChange: (key: string, value: string) => void;
}*/


export default function CommonInputHook(props) {
	const {id, title, type, placeholder, validation, isSubmitted, errors, register} = props;
	return <div>
		<label htmlFor={id}>{title}</label>
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			aria-invalid={
				isSubmitted ? (errors.id ? "true" : "false") : undefined
			}
			{...register(id, {
				validate: validation
			})}
		/>
		{errors[id] && <small role="alert">{errors[id].message}</small>}
	</div>;
}
