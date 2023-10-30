import { IjoinInfo } from "./types"

export async function  postJoin(info : IjoinInfo){
	const response = await fetch(`/member/join`, {
		method:"POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(info)
	});
	return response.json();
}

export async function getMemberCheck(id : string){
	const response = await fetch(`/member/check?userId=${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
	});
	return response.json();
}