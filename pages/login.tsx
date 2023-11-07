import LoginForm from "@components/Login/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-11">
        <span className="font-semibold text-4xl text-gray-700">
          동안교회 청소년부 회계관리
        </span>
        <LoginForm />
      </div>
    </div>
  );
}
