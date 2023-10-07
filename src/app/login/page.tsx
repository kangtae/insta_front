"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { Divider } from "antd";

import LoginButton from "@/components/LoginButton";
import LoginItem from "@/components/LoginItem";

import { login } from "./libs/apis";
import { ILoginInfo } from "./libs/types";

export default function LoginPage() {
    const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
        userId: "",
        password: "",
    });

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        try {
            console.log(loginInfo);

            const result = await login(loginInfo);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange =
        (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
            setLoginInfo((prev) => ({
                ...prev,
                [key]: event.target.value,
            }));
        };

    return (
        <>
            <h1>로그인 페이지</h1>
            <div className="w-[300px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <LoginItem
                        label="아이디&휴대폰 번호"
                        inputType="text"
                        placeholder="아이디를 입력하시기 바랍니다"
                        handleChange={handleChange("userId")}
                    />
                    <LoginItem
                        label="비밀번호"
                        inputType="password"
                        placeholder="비밀번호를 입력하시기 바랍니다"
                        handleChange={handleChange("password")}
                    />
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
