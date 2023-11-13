"use Client"
import React from "react";

interface Props {
	onClick: (e: boolean) => void;
}


export default function CommonButton(props: Props) {
	const {toggleModal} = props;
	return <>
		<button
			type="button"
			className="mt-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  sm:w-auto"
			onClick={() => toggleModal(true)
			}>중복 확인
		</button>
	</>;
}
