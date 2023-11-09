import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";

export default function Budget() {
  const headerNames = ['회계구분', '계정과목', '분류', '항목', '예산금액', '실행금액', '비고', '']

  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="예산" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  );
}
