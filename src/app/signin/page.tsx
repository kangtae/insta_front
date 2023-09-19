"use client"; // This is a client component 👈🏽
import {SIGNGUP_STATUS} from "./constants"
import {useState} from "react";
import {SignUpItem} from "@/components/SignUpItem";
import axios from "axios";
import CommonModal from "@/components/CommonModal";
export default function SignIn(){
	const [info, setInfo] = useState({
		name: "",
		id: "",
		pw: "",
		tel: "",
		gender: "M",
		birthday: "",
		address: "",
		email: "",
	});
	const handleChange = (key:string,value : string) => {
		setInfo(prevInfo => ({
			...prevInfo,
			[key]: value
		}));
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/member/join', info , {
				headers: {
					"Content-Type": "application/json"
				}
			});
		}catch(error){
			console.log(error);
		}
	}
	return <div>
		<CommonModal/>
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
							handleChange={handleChange}
						/>
					</div>
				})}
			</ul>}
			<button type="submit">가입하기</button>
		</form>
	</div>
}