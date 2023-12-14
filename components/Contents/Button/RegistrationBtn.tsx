interface RegistrationBtnType{
  title: string
  openModal: () => void
}

export default function RegistrationBtn({title, openModal}:RegistrationBtnType) {
  return (
    <button
      className="inline-flex items-center bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0"
      onClick={openModal}
    >
      {title}
    </button>
  );
}
