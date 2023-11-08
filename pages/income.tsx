import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Title";
import TableBox from "@components/TableBox";
import CountBox from "@components/Contents/CountBox";

export default function Income() {
  return (
    <Layout>
      <div className="w-10/12 h-5/6 flex flex-col gap-5">
        <div className="flex flex-row items-end gap-10">
          <Title title="수입기록" />
          <CountBox title="총 수입" />
        </div>
        <div className="border border-gray-300 w-full"/>
        <div>
          <TableBox />
        </div>
      </div>
    </Layout>
  );
}
