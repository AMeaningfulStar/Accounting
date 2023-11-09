import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";

export default function Notice() {
  const headerNames = ['번호', '제목', '등록일']
  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="공지사항" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  );
}
