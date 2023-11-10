export default function SubmitBtn({ formdata }: { formdata: any }) {
  return (
    <>
      <button
        className="text-white bg-[#7D8DA7] active:bg-[#8FA3C3] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg"
        onClick={() => console.log(formdata)}
      >
        등록
      </button>
    </>
  );
}
