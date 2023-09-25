import CommonInput from "@/components/CommonInput";
import {useState} from "react";
import axiosInstance from "@/lib/axiosInstance";

/*type Props= {
	inputKey: string,
	inputType: string,
	placeholder: string,
	handleChange: (key: string, value: string) => void;
}*/


export default function CommonModal({customStyle}) {
	const [id, setId] = useState("");
	const handleChange = (value : string) => {
		setId(value);
	}

/*	const handleSubmit = async (e: any) => {
		try {
			await axiosInstance.get()
		}
	}*/
	return (<>
		<h3>아이디 중복확인</h3>
		<article>
			아이디 :
			<div>
				<CommonInput
					inputType={"text"}
					handleChange={handleChange}
					placeholder={"아이디를 입력해주세요."}
					customStyle={`w-full h-8 mt-2 px-3 border border-[#ebebeb] ${customStyle}`}
				/>
			</div>
			<button type="button">중복확인</button>
		</article>
		<div>
			사용가능한 아이디 입니다.
			<button>사용하기</button>
		</div>
	</>);
}
