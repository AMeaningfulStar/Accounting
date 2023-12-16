import { create } from "zustand";

interface FormDataType {
  department: string; // 부서
  name: string; // 이름
  contactNumber: string; // 전화번호
  email: string; // 이메일
  role: string; // 관리자 권한
  id: string; // 아이디
  password: string; // 비밀번호
  status: string; // 상태?
  registrationDate: string; // 등록일자
  remarks: string; // 비고
}

interface ManagementState {
  formdata: FormDataType;
  setId: (newId: string) => void;
  setPassword: (newPassword: string) => void;
  setEmail: (newEmail: string) => void;
  setDepartment: (newDepartment: string) => void;
  setRole: (newRole: string) => void;
  setName: (newName: string) => void;
  setContactNumber: (newContactNumber: string) => void;
  setRemarks: (newRemarks: string) => void;
  clearManagment: () => void;
}

const ManagementStores = create<ManagementState>()((set) => ({
  formdata: {
    department: "",
    name: "",
    contactNumber: "",
    email: "",
    role: "",
    id: "",
    password: "",
    status: "Y",
    registrationDate: "",
    remarks: "",
  },

  // 아이디 set
  setId: (newId) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        id: newId,
      },
    })),

  // 비밀번호 set
  setPassword: (newPassword) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        password: newPassword,
      },
    })),

  // 이메일 set
  setEmail: (newEmail) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        email: newEmail,
      },
    })),

  // 이름 set
  setName: (newName) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        name: newName,
      },
    })),

  // 전화번호 set
  setContactNumber: (newContactNumber) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        contactNumber: newContactNumber,
      },
    })),

  // 부서 set
  setDepartment: (newDepartment) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        department: newDepartment,
      },
    })),

  // 권한&등록일자 set
  setRole: (newRole) =>
    set((prev: ManagementState) => {
      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const day = String(today.getDate()).padStart(2, "0");

      return {
        formdata: {
        ...prev.formdata,
        role: newRole,
        registrationDate: `${year}${month}${day}`
      }
      }
    }),

  // 비고 set
  setRemarks: (newRemarks) =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        remarks: newRemarks,
      },
    })),

  clearManagment: () =>
    set((prev: ManagementState) => ({
      formdata: {
        ...prev.formdata,
        department: "",
        name: "",
        contactNumber: "",
        email: "",
        role: "",
        id: "",
        password: "",
        status: "Y",
        registrationDate: "",
        remarks: "memo",
      },
    })),
}));

export default ManagementStores;
