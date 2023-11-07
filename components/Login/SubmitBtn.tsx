export default function SubmitBtn() {
  return (
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
  );
}
