import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";

import ManagmentTable from "@components/Contents/Main/ManagmentTable";

import React, { useEffect, useState } from "react";
import { getManagment } from "@api/axios/managmentAPI";

export default function Management() {
  const [managmentData, setManagmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getManagment();
        setManagmentData(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <div className="flex flex-row items-end gap-10">
        <Title title="사용자" />
      </div>
      <div className="border border-gray-300 w-full" />
        <ManagmentTable tableData={managmentData} />
      <div>
      </div>
    </Layout>
  );
}
