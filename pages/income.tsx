import React, { useState } from "react";
import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import TableBox from "@components/Contents/Main/TableBox";
import CountBox from "@components/Contents/Header/CountBox";
import RegistrationBtn from "@components/Contents/Header/RegistrationBtn";
import RegistrationModal from "@components/Modal/RegistrationModal";

export default function Income() {
  const [ registrationModal, setRegistrationModal ] = useState(false);
  const headerNames = ['회계구분', '일자', '주차', '분류', '금액', '비고', '등록일자', '']

  const openRegistrationModal = () => {
    setRegistrationModal(true)
  }

  const closeRegistrationModal = () => {
    setRegistrationModal(false)
  }

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-end gap-10">
          <Title title="수입기록" />
          <CountBox title="총 수입" />
        </div>
        <RegistrationBtn title="등록" openModal={openRegistrationModal}/>
      </div>
      <div className="border border-gray-300 w-full" />
      <div>
        <TableBox headerNames={headerNames} />
      </div>
      { registrationModal && <RegistrationModal closeModal={closeRegistrationModal} />}
    </Layout>
  );
}
