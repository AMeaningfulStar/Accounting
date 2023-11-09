import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";

export default function Calculate(){
  const headerNames = ['회계구분', '구분', '일자', '주차', '분류', '내역', '인수자', '정산일자', '입금일자', '비고', '첨부']

  return(
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="정산" />
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
    </Layout>
  )
}