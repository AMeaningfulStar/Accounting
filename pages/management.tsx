import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";

export default function Management() {
  const headerNames = ['이름', '연락처', '역할', '등록일자', '비고', '']

  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="사용자" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  );
}
