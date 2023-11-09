import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import CountBox from "@components/Contents/Header/CountBox";
import TableBox from "@components/Contents/Main/TableBox";

export default function Spending() {
  const headerNames = ['회계구분', '일자', '주차', '분류', '내역', '인수자', '비고', '금액', '']

  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="지출기록" />
        <CountBox title="총 수입" />
        <CountBox title="/ 잔액" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  );
}
