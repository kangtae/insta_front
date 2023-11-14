"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { Divider } from "antd";

import LoginButton from "@/components/LoginButton";
import LoginItem from "@/components/LoginItem";

import { login } from "./libs/apis";
import { ILoginInfo } from "./libs/types";
import { FieldValues, useForm } from "react-hook-form";
import LoginInput from "@/components/LoginInput";

export default function LoginPage() {
  const {register , handleSubmit, setError, formState: {errors}} = useForm()

  const onClickSubmit = async (data: FieldValues)=>{
    // console.log(data)
    try {
        const result = await login(data as ILoginInfo);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
  }

    return (
        <>
            <h1>로그인 페이지</h1>
            <div className="w-[300px] mx-auto">
                <form onSubmit={handleSubmit(onClickSubmit)}>
                    <LoginInput register={register} reg_msg="아이디를 입력하세요." label="아이디&휴대폰 번호" name="userId" inputType="text" placeholder="아이디를 입력하세요." errors={errors}/>
                    <LoginInput register={register} reg_msg="비밀번호를 입력하세요." label="비밀번호" name="password" inputType="password" placeholder="비밀번호를 입력하세요." errors={errors}/>
                    <LoginButton
                        buttonType="submit"
                        buttonText="로그인"
                        customStyle="mt-4 bg-indigo-500"
                    />
                </form>
                <Divider />

                <LoginButton
                    buttonType="button"
                    buttonText="카카오 로그인"
                    customStyle="bg-yellow-300 text-black"
                />
                <LoginButton
                    buttonType="button"
                    buttonText="네이버 로그인"
                    customStyle="mt-2 bg-green-500"
                />
                <LoginButton
                    buttonType="button"
                    buttonText="Google 로그인"
                    customStyle="mt-2 bg-red-600"
                />
            </div>
        </>
    );
}
