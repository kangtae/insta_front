"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

import LoginButton from "@/components/LoginButton";
import LoginItem from "@/components/LoginItem";
import axios from "axios";

export default function LoginPage() {
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
    });

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        try {
            console.log(loginInfo);

            const result = await axios.post(
                "http://localhost:3000/member/login",
                loginInfo
            );

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
                        handleChange={handleChange("id")}
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
                        customStyle="mt-4"
                    />
                </form>
            </div>
        </>
    );
}
