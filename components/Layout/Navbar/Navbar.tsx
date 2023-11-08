import Logo from "./Logo";
import Nav from "./Nav";
import ModeBtn from "./ModeBtn";

export default function Navbar() {
  return(
    <div className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Logo />
          <Nav />
          <ModeBtn />
        </div>
      </div>
  )
}