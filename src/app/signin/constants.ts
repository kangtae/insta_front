const SIGNGUP_STATUS = {
	list: [
		{
			id: 1,
			title : "이름",
			key: "name",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 2,
			title : "아이디",
			key: "id",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 3,
			title : "패스워드",
			key: "pw",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 4,
			title : "휴대폰 번호",
			key: "tel",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 5,
			title : "성별",
			key: "gender",
			type: "radio",
			options:[{
				id:"1",
				value: "M",
				name: "남자"
			},
			{
				id:"2",
				value: "F",
				name: "여자"
			}]
		},
		{
			id: 6,
			title : "생년 월일",
			key: "birthday",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 7,
			title : "주소",
			key: "address",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
		{
			id: 8,
			title : "이메일",
			key: "email",
			type: "text",
			placeholder: "이름을 입력해주세요"
		},
	],
}

export { SIGNGUP_STATUS }