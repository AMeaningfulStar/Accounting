import Layout from "@components/Layout/Layout";
import Title from "@components/Contents/Header/Title";
import RegistrationBtn from "@components/Contents/Header/RegistrationBtn";
import ModalLayout from "@components/Modal/ModalLayout";

// 데이터 테이블
import ManagmentTable from "@components/Contents/Main/ManagmentTable";

// API
import React, { useState } from "react";
import { postManagment } from "@api/axios/managmentAPI";

// 모달
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ManagementStores from "@stores/ManagmentStore";

export default function Management() {
  const [registrationModal, setRegistrationModal] = useState(false); // 등록 Modal
  const [dataChange, setDataChange] = useState(false); // 데이터 추가 여부
  const {
    formdata,
    setId,
    setPassword,
    setEmail,
    setDepartment,
    setName,
    setContactNumber,
    setRole,
    setRemarks,
    clearManagment,
  } = ManagementStores();

  // Modal open
  const openRegistrationModal = () => {
    setRegistrationModal(true);
  };

  // modal close
  const closeRegistrationModal = () => {
    setRegistrationModal(false);
    clearManagment();
  };

  const handleSubmit = async () => {
    try {
      setDataChange(true);
      const response = await postManagment(formdata);

      if (response) {
        console.log("Success create user");
      }
    } catch (error) {
      console.error("Error create user:", error);
    } finally {
      closeRegistrationModal();
      setDataChange(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <Title title="사용자" />
        <RegistrationBtn openModal={openRegistrationModal} />
      </div>
      <div className="border border-gray-300 w-full" />
      <ManagmentTable dataChange={dataChange} setDataChange={setDataChange} />
      <div></div>
      {registrationModal && (
        <ModalLayout title="사용자 등록" closeModal={closeRegistrationModal}>
          <TextField
            label="아이디"
            id="id"
            size="small"
            fullWidth
            type="text"
            value={formdata.id}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setId(e.target.value)}
            color="info"
          />
          <TextField
            label="비밀번호"
            id="password"
            size="small"
            fullWidth
            type="password"
            value={formdata.password}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
            color="info"
          />
          <TextField
            label="이메일"
            id="email"
            size="small"
            fullWidth
            type="email"
            value={formdata.email}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setEmail(e.target.value)}
            color="info"
          />
          <TextField
            label="이름"
            id="name"
            size="small"
            fullWidth
            type="text"
            value={formdata.name}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setName(e.target.value)}
            color="info"
          />
          <TextField
            label="전화번호 (예시: 01012345678)"
            id="contactNumber"
            size="small"
            fullWidth
            type="text"
            value={formdata.contactNumber}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setContactNumber(e.target.value)}
            color="info"
          />
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">부서</InputLabel>
            <Select
              color="info"
              className="bg-white"
              labelId="demo-select-small-label"
              id="department"
              value={formdata.department}
              label="부서"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"청소년1부"}>청소년1부</MenuItem>
              <MenuItem value={"청소년1부+"}>청소년1부+</MenuItem>
              <MenuItem value={"청소년2부"}>청소년2부</MenuItem>
              <MenuItem value={"청소년3부"}>청소년3부</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">권한</InputLabel>
            <Select
              color="info"
              className="bg-white"
              labelId="demo-select-small-label"
              id="role"
              value={formdata.role}
              label="권한"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"user"}>일반회원</MenuItem>
              <MenuItem value={"admin"}>관리자</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="비고"
            id="remarks"
            size="small"
            fullWidth
            type="text"
            value={formdata.remarks}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setRemarks(e.target.value)}
            color="info"
          />
          <button
            className="text-white bg-[#7D8DA7] active:bg-[#8FA3C3] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg"
            onClick={() => handleSubmit()}
          >
            등록
          </button>
        </ModalLayout>
      )}
    </Layout>
  );
}
