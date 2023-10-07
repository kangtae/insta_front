"use client";

import CommonInput from "@/components/CommonInput";
import { useState } from "react";
import {getMemberCheck} from "@/app/signin/lib/api";

/*interface Props {
	customStyle: string;
	toggleModal: (value:boolean) => void;
}*/


export default function CommonModal({ customStyle,toggleModal,inputHandleChange }: {
	customStyle: string;
	toggleModal: (value:boolean) => void;
	inputHandleChange: (key: string, value: string) => void;
}) {
	const [id, setId] = useState<string>(""); // id 상태를 문자열로 설정
	const [isMemberCheck, setIsMemberCheck] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("")
	const handleChange = (key:string,value : string) => {
		setId(value);
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await getMemberCheck(id);
			if(res.message === "success"){
				!isMemberCheck && setIsMemberCheck(true);
				setMessage("사용가능한 아이디입니다.")
				return undefined;
			}
			setMessage("사용불가능한 아이디입니다.")
		} catch (error) {

		}
	}

	const closeModal= () => {
		toggleModal(false)
		inputHandleChange("userId",id);
	}

	const renderDescription = () => {
		console.log("isMemberCheck",isMemberCheck);
		if(isMemberCheck){
			return <>
				사용가능한 아이디입니다.
				<button type="button" onClick={closeModal}>사용하기</button>
			</>
		}
		return <>
			사용불가능한 아이디입니다.
		</>
	}

	return (
		<div className="border-solid border-2 border-sky-500">
			<h3>아이디 중복확인</h3>
			<form onSubmit={handleSubmit}> {/* form 태그를 사용하여 submit 이벤트를 처리 */}
				<div>
					아이디 :
					<div>
						<CommonInput
							inputType={"text"}
							handleChange={handleChange}
							placeholder={"아이디를 입력해주세요."}
							customStyle={`w-full h-8 mt-2 px-3 border border-[#ebebeb] ${customStyle}`}
						/>
					</div>
				</div>
				<button type="submit">중복확인</button> {/* submit 버튼으로 변경 */}
			</form>
			{isMemberCheck && message === "사용가능한 아이디입니다."
				? <>{message} <button type="button" onClick={closeModal}>사용하기</button></>
				: message}
		</div>
	);
}