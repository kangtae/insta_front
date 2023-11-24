"use client";

import CommonInput from "@/components/CommonInput";
import {useState} from "react";
import {getMemberCheck} from "@/app/signin/lib/api";


export default function CommonModal({customStyle, toggleModal, setValue}: {
	customStyle: string;
	toggleModal: (value: boolean) => void;
	inputHandleChange: (key: string, value: string) => void;
	setValue
}) {
	const [id, setId] = useState<string>(""); // id 상태를 문자열로 설정
	const [isMemberCheck, setIsMemberCheck] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("")
	const handleChange = (key: string, value: string) => {
		setId(value);
	}
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await getMemberCheck(id);
			if (res.message === "success") {
				!isMemberCheck && setIsMemberCheck(true);
				setMessage("사용가능한 아이디입니다.")
				return undefined;
			}
			setMessage("사용불가능한 아이디입니다.")
		} catch (error) {
			alert("통신에러")
		}
	}

	const closeModal = () => {
		toggleModal(false)
		setValue("userId", id);
	}

	const renderDescription = () => {
		if (isMemberCheck) {
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
		<>
			<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div
							className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
										<h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">아이디 중복확인</h3>
										<div className="mt-2">
											<div>
												<form onSubmit={handleSubmit}> {/* form 태그를 사용하여 submit 이벤트를 처리 */}
													<div>
														<span className="inline-flex">아이디 :</span>
														<CommonInput
															inputType={"text"}
															handleChange={handleChange}
															placeholder={"아이디를 입력해주세요."}
															customStyle={`h-8 mt-2 px-3 border border-[#ebebeb] inline-flex ${customStyle}`}
														/>
													</div>
													<button
														className="mt-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  sm:w-auto"
														type="submit">중복확인
													</button>
													{/* submit 버튼으로 변경 */}
												</form>
												{isMemberCheck && message === "사용가능한 아이디입니다."
													? <>{message}
														<button type="button" onClick={closeModal}>사용하기</button>
													</>
													: message}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}