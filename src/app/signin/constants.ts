

const SIGNGUP_STATUS = {
	list: [
		{
			id: 1,
			title : "이름",
			key: "userName",
			type: "text",
			placeholder: "이름을 입력해주세요",
			required:"이름은 2자 이상이어야 합니다.",
			validation: {
				required: "이름은 2자 이상이어야 합니다.",
				minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
				maxLength: { value: 5, message: '이름은 5자 이하이어야 합니다.' },
			},
		},
		{
			id: 2,
			title : "아이디",
			key: "userId",
			type: "text",
			placeholder: "아이디를 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다.",
			validation: {
				required: " 6~15 자 숫자와 영문으로 조합",
				validate: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
			},
		},
		/*{
			id: 3,
			title : "패스워드",
			key: "password",
			type: "text",
			placeholder: "패스워드를 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다."
		},
		{
			id: 4,
			title : "휴대폰 번호",
			key: "userPhone",
			type: "text",
			placeholder: "휴대폰번호를 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다."
		},
		{
			id: 5,
			title : "성별",
			key: "sex",
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
			key: "birthDay",
			type: "text",
			placeholder: "생년월일을 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다."
		},
		{
			id: 7,
			title : "주소",
			key: "address",
			type: "text",
			placeholder: "주소를 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다."
		},
		{
			id: 8,
			title : "이메일",
			key: "email",
			type: "text",
			placeholder: "이메일을 입력해주세요",
			errorMessage: "형식에 맞지 않습니다.",
			required:"필수 입력입니다."
		},*/
	],
}

export { SIGNGUP_STATUS }