import Navbar from "./Navbar";

interface LayoutType {
  children: React.ReactNode
}

export default function Layout({ children }:LayoutType) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar/>
      <div className="w-full h-full flex justify-center items-center">{children}</div>
    </div>
  );
}
