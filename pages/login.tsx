import React, { useState } from "react";

export default function Login() {
  const [passwordShow, setPasswordShow] = useState(false);

  const PasswordShowBtn = () => {
    if (passwordShow) {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      );
    }

    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        ></path>
      </svg>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-11">
        <span className="font-semibold text-4xl text-gray-700">
          동안교회 청소년부 회계관리
        </span>
        <form className="flex flex-col items-center justify-center w-full gap-y-11">
          <div className="flex flex-col gap-y-5 w-full justify-center items-center">
            <div className="flex flex-col w-4/5">
              <label className="text-gray-700" htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Please insert your email"
                className="appearance-none border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#7D8DA7] focus:shadow-md bg-white text-gray-700"
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-gray-700">Password</label>
              <div className="relative flex items-center mt-2">
                <input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="flex-1 appearance-none border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#7D8DA7] focus:shadow-md bg-white text-gray-700"
                />
                <button
                  onClick={() => setPasswordShow(!passwordShow)}
                  type="button"
                  className="absolute right-2 bg-transparent flex items-center justify-center text-gray-500"
                >
                  <PasswordShowBtn />
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-4/5 py-2 bg-[#7D8DA7] rounded-lg text-whit active:bg-[#8FA3C3] active:shadow-md"
          >
            <div className="flex flex-row items-center justify-center">
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
              <div className="font-bold text-xl text-white">로그인</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
