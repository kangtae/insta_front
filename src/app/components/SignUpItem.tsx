import React from 'react';
import CommonInput from "@/app/components/CommonInput";
import CommonRadio from "@/app/components/CommonRadio";

type Props= {
	handleChange: (key: string, value: string) => void;
	title: string,
	options: [],
	placeholder: string,
	inputKey: string,
	type: string,
	info: {},
	key: number
}
export const SignUpItem = (props: Props) => {
	const {handleChange, title ,type, inputKey, placeholder, options, info } = props;
	if(type === "radio"){
		return <li>
			<h2>{title}</h2>
			{options.map(item => {
				return <CommonRadio
					Key={item.id}
					inputKey={inputKey}
					name={item.name}
					defaultValue={info.gender}
					value={item.value}
					handleChange={handleChange}
				/>
			})}
		</li>
	}
	/*push test2*/
	return <li>
		<h2>{title}</h2>
		<CommonInput
			inputKey={inputKey}
			inputType={type}
			placeholder={placeholder}
			handleChange={handleChange}
		/>
		{inputKey === "id" && <span>중복 확인</span>}
	</li>
}




