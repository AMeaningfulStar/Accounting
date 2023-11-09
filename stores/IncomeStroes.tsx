import { create } from "zustand";

interface IncomeState {
  formdata: FormDataType; // Form 입력 값
  setAccountType: (newAccountType: string) => void; // 회계 구분 set
}

interface FormDataType {
  accountType: string; // 회계구분
  date: Date; // 일자
  week: string; // 주차
  category: string; // 분류
  amount: number; // 금액
  remark: string; // 비고
}

const IncomeStores = create<IncomeState>()((set) => ({
  formdata: {
    accountType: "",
    date: new Date(),
    week: "",
    category: "",
    amount: 0,
    remark: "",
  },

  setAccountType: (newAccountType) =>
    set((prev: IncomeState) => ({
      formdata: {
        ...prev.formdata,
        accountType: newAccountType,
      },
    })),
}));

export default IncomeStores