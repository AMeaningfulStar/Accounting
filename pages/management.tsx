import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";

import ManagmentTable from "@components/Contents/Main/ManagmentTable";

interface ManagmentType {
  name: string;
  email: string;
  contactNumber: string;
  role: string;
  registrationDate: string;
  description: string;
}

const ManagmentData: Array<ManagmentType> = [
  {
    name: "김동안",
    email: "test@naver.com",
    contactNumber: "01028024955",
    role: "admin",
    registrationDate: "20231214",
    description: "없음",
  },
  {
    name: "김동안",
    email: "test@naver.com",
    contactNumber: "01028024955",
    role: "admin",
    registrationDate: "20231214",
    description: "없음",
  },
  {
    name: "김동안",
    email: "test@naver.com",
    contactNumber: "01028024955",
    role: "admin",
    registrationDate: "20231214",
    description: "없음",
  },
];

export default function Management() {
  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="사용자" />
      </div>
      <div className="border border-gray-300 w-full" />
        <ManagmentTable tableData={ManagmentData} />
      <div>
      </div>
    </Layout>
  );
}
