import { ILoginInfo } from "./types";

export async function login(loginInfo: ILoginInfo) {
    const res = await fetch("/member/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
