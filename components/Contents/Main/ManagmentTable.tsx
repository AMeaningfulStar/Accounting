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
import { getManagment } from "@api/axios/managmentAPI";

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
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  role: string;
  registrationDate: string;
  description: string;
}

export default function ManagmentTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [tableData, setTableData] = useState<Array<ManagmentType>>([]);
  const [loading, setLoading] = useState(false);
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
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    const cleanedNumber = contactNumber.replace(/\D/g, '');
    const match = cleanedNumber.match(/^(\d{3})(\d{4})(\d{4})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    } else {
      // Handle invalid phone numbers
      return contactNumber;
    }
  }

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
    const cleanedDate = registrationDate.replace(/\D/g, '');
    const match = cleanedDate.match(/^(\d{4})(\d{2})(\d{2})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    } else {
      // Handle invalid phone numbers
      return registrationDate;
    }
  }

  return (
    <div>
      {loading ? 
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-xl p-10">...loading</span>
        </div>
      :  
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
                <TableRow key={tableData.id}>
                  <TableCell component="th" scope="row" align="center">
                    {tableData.name}
                  </TableCell>
                  <TableCell align="center">
                    {tableData.email}
                  </TableCell>
                  <TableCell align="center">
                    {formatContactNumber(tableData.contactNumber)}
                  </TableCell>
                  <TableCell align="center">{formatRole(tableData.role)}</TableCell>
                  <TableCell align="center">
                    {formatRegistrationDate(tableData.registrationDate)}
                  </TableCell>
                  <TableCell align="center">{tableData.description}</TableCell>
                  <TableCell align="center">
                    <button
                      className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
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
      }
    </div>
  );
}
