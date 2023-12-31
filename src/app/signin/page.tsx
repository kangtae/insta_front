"use client"; // This is a client component 👈🏽
import {SIGNGUP_STATUS} from "./constants"
import React, {useState} from "react";
import {SignUpItem} from "@/components/SignUpItem";
import CommonModal from "@/components/CommonModal";
import { postJoin } from "./lib/api";
import {IjoinInfo} from "@/app/signin/lib/types";

export default function SignIn(){
	const [info, setInfo] = useState<IjoinInfo>({
		name: "",
		userId:"",
		pw: "",
		tel: "",
		gender: "M",
		birthDay: "",
		address: "",
		email: "",
	});
	const [isModalOpen, setIsModalOpen] =useState<boolean>(false)

	const toggleModal = (value : boolean) => {
		setIsModalOpen(value)
	}
	const handleChange = (key:string,value : string) => {
		setInfo(prevInfo => ({
			...prevInfo,
			[key]: value
		}));
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await postJoin(info)
		}catch(error){
			console.log(error);
		}
	}
	return <div>
		{isModalOpen && <CommonModal
			toggleModal={toggleModal}
			inputHandleChange={handleChange}
		/>}
		<h1>회원가입</h1>

		<form onSubmit={handleSubmit}>
			{SIGNGUP_STATUS.list && <ul>
				{SIGNGUP_STATUS.list.map((item,idx) => {
					return <div key={`id_${idx}`} >
						<SignUpItem
							title={item.title}
							inputKey={ item.key}
							type={item.type}
							placeholder={item?.placeholder || ""}
							options={item?.options || []}
							info={info}
							toggleModal={toggleModal}
							handleChange={handleChange}
						/>
					</div>
				})}
			</ul>}
			<button type="submit">가입하기</button>

		</form>
	</div>
}