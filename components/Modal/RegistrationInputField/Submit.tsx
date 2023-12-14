export default function Submit({ closeModal }: { closeModal: () => void }) {
  return (
    <>
      <button
        className="text-white bg-[#7D8DA7] active:bg-[#8FA3C3] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg"
        onClick={() => closeModal()}
      >
        등록
      </button>
    </>
  );
}
