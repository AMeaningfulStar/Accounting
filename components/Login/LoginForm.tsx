import React, { useState } from "react";

import PasswordShowBtn from "@components/Login/PasswordShowBtn";
import InputLabel from "@components/Login/InputLabel";
import SubmitBtn from "@components/Login/SubmitBtn";

export default function LoginForm() {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <form className="flex flex-col items-center justify-center w-full gap-y-11">
      <div className="flex flex-col gap-y-5 w-full justify-center items-center">
        <div className="flex flex-col w-4/5">
          <InputLabel label="Email" htmlFor="userEmail" />
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Please insert your email"
            className="appearance-none border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#7D8DA7] focus:shadow-md bg-white text-gray-700"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <InputLabel label="Password" htmlFor="password" />
          <div className="relative flex items-center mt-2">
            <input
              type={passwordShow ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Please insert your password"
              className="flex-1 appearance-none border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:border-[#7D8DA7] focus:shadow-md bg-white text-gray-700"
            />
            <PasswordShowBtn
              passwordShow={passwordShow}
              setPasswordShow={setPasswordShow}
            />
          </div>
        </div>
      </div>
      <SubmitBtn />
    </form>
  );
}
