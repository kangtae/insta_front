"use client"
import { useForm } from "react-hook-form";
import CommonInputHook from "@/components/CommonInputHook";
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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{
				SIGNGUP_STATUS.list.map((item, idx) =>{
					return <CommonInputHook
						register={register}
						key={item.id}
						title={item.title}
						id={item.key}
						type={item.type}
						placeholder={item.placeholder}
						validation={item.validation}
						isSubmitted={isSubmitted}
						errors={errors}
					/>
				})
			}


{/*			<label htmlFor="email">이메일</label>
			<input
				id="email"
				type="text"
				placeholder="test@email.com"
				aria-invalid={
					isSubmitted ? (errors.email ? "true" : "false") : undefined
				}
				{...register("email", {
					required: "이메일은 필수 입력입니다.",
					pattern: {
						value: /\S+@\S+\.\S+/,
						message: "이메일 형식에 맞지 않습니다."
					}
				})}
			/>
			{errors.email && <small role="alert">{errors.email.message}</small>}
			<label htmlFor="password">비밀번호</label>
			<input
				id="password"
				type="password"
				placeholder="****************"
				aria-invalid={
					isSubmitted ? (errors.password ? "true" : "false") : undefined
				}
				{...register("password", {
					required: "비밀번호는 필수 입력입니다.",
					minLength: {
						value: 8,
						message: "8자리 이상 비밀번호를 사용하세요."
					}
				})}
			/>*/}
			{errors.password && <small role="alert">{errors.password.message}</small>}
			<button type="submit" disabled={isSubmitting}>
				로그인
			</button>
		</form>
	);
}

export default SignInHookForm;