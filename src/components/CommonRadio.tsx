"use client";
import {useState} from "react";

type Props= {
	inputKey: string,
	inputType: string,
	placeholder: string,
	handleChange: (key: string, value: string) => void;
	defaultValue: string,
}

export default function CommonRadio(props: Props) {
	const {value,  name, handleChange, inputKey, defaultValue} = props;
	const handleChangeEvent = (e) => {
		const selectedValue = e.target.value;
		handleChange(inputKey,selectedValue)
	}
	return <>
		<label>
			<input type="radio"
			       className="text-black"
			       value={value}
			       checked={value === defaultValue}
			       onChange={(e)=>handleChangeEvent(e)}
			/>
			{name}
		</label>
	</>;
}
