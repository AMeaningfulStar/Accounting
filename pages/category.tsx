import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";

export default function Category() {
  const headerNames = ['구분', '분류코드', '대항목', '소항목', '사용여부', '비고']

  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="항목코드" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  );
}
