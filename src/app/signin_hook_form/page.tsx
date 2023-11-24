"use client"
import { useForm } from "react-hook-form";
import CommonInputHooknp from "@/components/CommonInputHook";
import {SIGNGUP_STATUS} from "@/app/signin/constants";

function SignInHookForm(){
	const onSubmit = (data) => {
		console.log("data", data)
	};
	const {
		register,
		handleSubmit,
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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{
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
			}
			<button type="submit" disabled={isSubmitting}>
				로그인
			</button>
		</form>
	);
}

export default SignInHookForm;