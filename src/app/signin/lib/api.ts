interface IpostJoin {
	name: string
	userId:string
	pw: string
	tel: string
	gender: string
	birthday: string
	address: string
	email: string
}
export async function  postJoin(info : IpostJoin){
	const response = await fetch("/member/join", {
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