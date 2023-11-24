"use client"
import { useForm } from "react-hook-form";
import CommonInputHooknp from "@/components/CommonInputHook";
import CommonModal from "@/components/CommonModal";
import React, {useState} from "react";
import CommonButton from "@/components/CommonButton";

function SignInHookForm(){
	const [isModalOpen, setIsModalOpen] =useState<boolean>(false)

	const onSubmit = (data) => {
		console.log("data", data)
	};
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitting, isSubmitted, errors }
	} = useForm({
		mode: "onSubmit",
		defaultValues: {
			userName: "",
		},
	});

	const validateName = (value) => {
		const minLength = 2;
		const maxLength = 5;

		if (!value) {
			return '이 필드는 필수입니다.';
		}

		if (value.length < minLength || value.length > maxLength) {
			return '이름은 2자 이상 5자 이하이어야 합니다.';
		}

		return true;
	};

	const validateId = (value) => {
		if (!value) {
			return '이 필드는 필수입니다.';
		}
		return true;
	};

	const toggleModal = (value : boolean) => {
		console.log("333")
		setIsModalOpen(value)
		if(value){
		}
	}

	return (
		<div>
			{isModalOpen && <CommonModal
				toggleModal={toggleModal}
				setValue={setValue}
			/>}
			<h1>회원가입</h1>
			<div className="w-[300px] mx-auto">
				<form onSubmit={handleSubmit(onSubmit)}>
					<CommonInputHooknp
						register={register}
						title={"이름"}
						id={"userName"}
						type={"text"}
						placeholder={"이름을 입력해주세요"}
						validation={validateName}
						isSubmitted={isSubmitted}
						errors={errors}
					/>
					<div>
						<CommonInputHooknp
							register={register}
							title={"아이디"}
							id={"userId"}
							type={"text"}
							disabled={true}
							placeholder={"아이디를 입력해주세요"}
							validation={validateId}
							isSubmitted={isSubmitted}
							errors={errors}
						/>
						<CommonButton
							toggleModal={toggleModal}
						/>
					</div>

					<button type="submit" disabled={isSubmitting}>
						로그인
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignInHookForm;