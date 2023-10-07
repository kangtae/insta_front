import React from 'react';
import CommonInput from "@/components/CommonInput";
import CommonRadio from "@/components/CommonRadio";

interface Props {
	handleChange: (key: string, value: string) => void;
	title: string;
	options: [];
	placeholder: string;
	inputKey: string;
	type: string;
	info: {};
	toggleModal: (value:boolean) => void;
	customStyle?: string;
}
export const SignUpItem = (props: Props) => {
	const {handleChange, title ,type, inputKey, placeholder, options, info, customStyle, toggleModal} = props;
	if(type === "radio"){
		return <li>
			<h2>{title}</h2>
			{options.map(item => {
				return <CommonRadio
					key={item.id}
					inputKey={inputKey}
					name={item.name}
					defaultValue={info.gender}
					value={item.value}
					handleChange={handleChange}
				/>
			})}
		</li>
	}
	return <li>
		<h2>{title}</h2>
		<CommonInput
			inputKey={inputKey}
			inputType={type}
			placeholder={placeholder}
			handleChange={handleChange}
			value={info[inputKey]}
			customStyle={`w-full h-8 mt-2 px-3 border border-[#ebebeb] ${customStyle}`}
			disabled={inputKey === "userId" ? true : false}
		/>
		{inputKey === "userId" && <span onClick={
			()=>toggleModal(true)
		}>중복 확인</span>}
	</li>
}




