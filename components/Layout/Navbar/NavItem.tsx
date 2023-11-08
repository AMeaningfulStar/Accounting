import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemType {
  href: string;
  title: string;
}

export default function NavItem({href, title}:NavItemType){
  const router = useRouter()

  return(
    <Link href={href} className={`text-gray-700 ${router.pathname === href ? "text-[#7D8DA7]" : "hover:text-[#7D8DA7]"}`}>{title}</Link>
  )
}