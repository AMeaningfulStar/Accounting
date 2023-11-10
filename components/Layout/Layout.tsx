import Navbar from "./Navbar/Navbar";

interface LayoutType {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full p-1.5">
        <div className="w-full h-full flex justify-center items-center bg-white">
          <div className="w-10/12 h-5/6 flex flex-col gap-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
