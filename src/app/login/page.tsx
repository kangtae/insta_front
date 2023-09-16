import LoginButton from "@/components/LoginButton";
import LoginInput from "@/components/LoginInput";
import LoginItem from "@/components/LoginItem";

export default function LoginPage() {
  return (
    <>
      <h1>로그인 페이지</h1>
      <div className="w-[300px] mx-auto">
        <form action="">
          <LoginItem
            label="아이디&휴대폰 번호"
            inputType="text"
            placeholder="아이디를 입력하시기 바랍니다"
          />
          <LoginItem
            label="비밀번호"
            inputType="password"
            placeholder="비밀번호를 입력하시기 바랍니다"
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
