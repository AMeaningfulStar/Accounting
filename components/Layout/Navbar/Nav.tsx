import NavItem from "./NavItem";

export default function Nav() {
  return(
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-10">
      <NavItem href="/income" title="수입기록" />
      <NavItem href="/spending" title="지출기록" />
      <NavItem href="/calculate" title="정산" />
      <NavItem href="/budget" title="예산" />
      <NavItem href="/category" title="항목코드" />
      <NavItem href="/notice" title="공지사항" />
      <NavItem href="/management" title="관리" />
    </nav>
  )
}