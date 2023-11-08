import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/main"
      className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <span className="ml-3 text-xl">청소년부 회계관리</span>
    </Link>
  );
}
