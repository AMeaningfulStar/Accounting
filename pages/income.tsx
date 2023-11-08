import Layout from "@components/Layout/Layout";

export default function Income() {
  return (
    <Layout>
      <div className="w-10/12 h-5/6 flex flex-col gap-5">
        <div className="flex flex-row items-end gap-10">
          <span className="text-3xl font-semibold">수입기록</span>
          <span className="text-xl font-medium">총 예산: {} 원</span>
        </div>
        
        <div className="border border-gray-300 w-full"></div>
        
      </div>
    </Layout>
  );
}
