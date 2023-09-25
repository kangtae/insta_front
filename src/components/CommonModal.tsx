import CommonInput from "@/components/CommonInput";
import { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

export default function CommonModal({ customStyle }: { customStyle: string }) {
	const [id, setId] = useState<string>(""); // id 상태를 문자열로 설정

	const handleChange = (value: string) => {
		setId(value);
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axiosInstance.get("/member/check", { params: { userId: id } });
			console.log("response", response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
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
			{id && <div>사용가능한 아이디입니다. <button>사용하기</button></div>} {/* id가 있을 때만 표시 */}
		</>
	);
}