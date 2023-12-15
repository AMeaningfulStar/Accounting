import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import RegistrationBtn from "@components/Contents/Header/RegistrationBtn";
import ModalLayout from "@components/Modal/ModalLayout";

import ManagmentTable from "@components/Contents/Main/ManagmentTable";

import React, { useEffect, useState } from "react";
import { getManagment } from "@api/axios/managmentAPI";

export default function Management() {
  const [ registrationModal, setRegistrationModal ] = useState(false); // 등록 Modal
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

  // Modal open
  const openRegistrationModal = () => {
    setRegistrationModal(true)
  }

  // modal close
  const closeRegistrationModal = () => {
    setRegistrationModal(false)
  }

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <Title title="사용자" />
        <RegistrationBtn openModal={openRegistrationModal}/>
      </div>
      <div className="border border-gray-300 w-full" />
        <ManagmentTable tableData={managmentData} />
      <div>
      </div>
      { registrationModal && <ModalLayout title="사용자 등록" closeModal={closeRegistrationModal}>ㄴㅇ</ModalLayout>}
    </Layout>
  );
}
