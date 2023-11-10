interface ModalType {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function ModalLayout({
  title,
  closeModal,
  children,
}: ModalType) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg px-8 py-5 flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="text-gray-900 text-2xl font-medium title-font">
            {title}
          </span>
          <button onClick={closeModal}>닫기</button>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
}
