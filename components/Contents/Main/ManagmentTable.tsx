import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  getManagment,
  getManagmentID,
  putManagmentID,
  deleteManagmentID,
} from "@api/axios/managmentAPI";

// modal
import ManagementStores from "@stores/ManagmentStore";
import ModalLayout from "@components/Modal/ModalLayout";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

interface ManagmentType {
  userId: number;
  department: string;
  name: string;
  contactNumber: string;
  email: string;
  role: string;
  id: string;
  password: string;
  status: string;
  registrationDate: string;
  remarks: string;
}

export default function ManagmentTable({
  dataChange,
  setDataChange,
}: {
  dataChange: boolean;
  setDataChange: (value: React.SetStateAction<boolean>) => void;
}) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);
  const [tableData, setTableData] = useState<Array<ManagmentType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(0);
  const {
    formdata,
    setManagment,
    setPassword,
    setEmail,
    setContactNumber,
    setRole,
    setRemarks,
    setDepartment,
    clearManagment,
  } = ManagementStores();
  const headerNames = [
    "이름",
    "이메일",
    "연락처",
    "역할",
    "등록일자",
    "비고",
    "",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getManagment();
        setTableData(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataChange]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  // 연락처 format
  const formatContactNumber = (contactNumber: string) => {
    const cleanedNumber = contactNumber.replace(/\D/g, "");
    const match = cleanedNumber.match(/^(\d{3})(\d{4})(\d{4})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    } else {
      // Handle invalid phone numbers
      return contactNumber;
    }
  };

  // 역할 format
  const formatRole = (role: string) => {
    switch (role) {
      case "admin":
        return "관리자";
      case "":
        return "작업자";
      default:
        return "일반회원";
    }
  };

  // 등록일자 format
  const formatRegistrationDate = (registrationDate: string) => {
    const cleanedDate = registrationDate.replace(/\D/g, "");
    const match = cleanedDate.match(/^(\d{4})(\d{2})(\d{2})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    } else {
      // Handle invalid phone numbers
      return registrationDate;
    }
  };

  // Modal open
  const openModal = async (userID: number) => {
    try {
      const response = await getManagmentID(userID);

      if (response) {
        setManagment(response);
        setUserID(userID);
      } else {
        throw Error("사용자의 정보를 불러오기 실패했습니다");
      }
    } catch (error: any) {
      console.error("Error massage:", error.massage);
    } finally {
      setIsModalShow(true);
    }
  };

  // modal close
  const closeModal = () => {
    setIsModalShow(false);
    clearManagment();
  };

  // user Updata
  const handleChangeBtn = async () => {
    try {
      setDataChange(true);
      const response = await putManagmentID(formdata, userID);

      if (response) {
        console.log("사용자의 정보를 성공적으로 업데이트했습니다");
      } else {
        throw new Error("사용자의 정보를 업데이트하는데 실패했습니다");
      }
    } catch (error: any) {
      console.error("Error massage:", error.massage);
    } finally {
      closeModal();
      setDataChange(false);
    }
  };

  // user delete
  const handleDeleteBtn = async () => {
    try {
      setDataChange(true);
      const response = await deleteManagmentID(userID);

      if (response) {
        console.log("사용자의 정보를 성공적으로 삭제했습니다");
      } else {
        throw new Error("사용자의 정보를 삭제하는데 실패했습니다");
      }
    } catch (error: any) {
      console.error("Error massage:", error.massage);
    } finally {
      closeModal();
      setDataChange(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-xl p-10">...loading</span>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="custom pagination table">
            <TableHead className="bg-gray-300">
              <TableRow>
                {headerNames &&
                  headerNames.map((name, idx) => (
                    <TableCell
                      key={idx}
                      align="center"
                      className="font-semibold text-sm"
                    >
                      {name}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((tableData) => (
                  <TableRow key={tableData.userId}>
                    <TableCell component="th" scope="row" align="center">
                      {tableData.name}
                    </TableCell>
                    <TableCell align="center">{tableData.email}</TableCell>
                    <TableCell align="center">
                      {formatContactNumber(tableData.contactNumber)}
                    </TableCell>
                    <TableCell align="center">
                      {formatRole(tableData.role)}
                    </TableCell>
                    <TableCell align="center">
                      {formatRegistrationDate(tableData.registrationDate)}
                    </TableCell>
                    <TableCell align="center">{tableData.remarks}</TableCell>
                    <TableCell align="center">
                      <button
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        onClick={() => openModal(tableData.userId)}
                      >
                        수정/삭제
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 65 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3, 5, 7]}
                  colSpan={8}
                  count={tableData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
      {isModalShow && (
        <ModalLayout title="사용자 수정 및 삭제" closeModal={closeModal}>
          <TextField
            disabled
            label="아이디"
            size="small"
            fullWidth
            type="text"
            value={formdata.id}
            style={{ backgroundColor: "white" }}
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
          />
          <TextField
            label="이메일"
            size="small"
            fullWidth
            type="text"
            value={formdata.email}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            disabled
            label="이름"
            size="small"
            fullWidth
            type="text"
            value={formdata.name}
            style={{ backgroundColor: "white" }}
          />
          <TextField
            label="전화번호"
            size="small"
            fullWidth
            type="text"
            value={formdata.contactNumber}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setContactNumber(e.target.value)}
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
          <div className="grid grid-cols-2 gap-2">
            <button
              className="text-white bg-[#EF9688] active:bg-[#8FA3C3] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg"
              onClick={() => handleDeleteBtn()}
            >
              삭제
            </button>
            <button
              className="text-white bg-[#7D8DA7] active:bg-[#8FA3C3] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg"
              onClick={() => handleChangeBtn()}
            >
              수정
            </button>
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
