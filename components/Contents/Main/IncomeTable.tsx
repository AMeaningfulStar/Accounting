import React, { useState } from "react";
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
// import AccountingTypeInput from "@components/Modal/RegistrationInputField/AccountingType";

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

interface IncomeTableType {
  tableData: Array<IncomeType>;
  openChangeModal: (data: any) => void;
}

interface IncomeType {
  accountingType: string;
  incomeDate: Date;
  weekNumber: string;
  classification: string;
  amount: number;
  description: string;
  createDate: string;
}

export default function IncomeTable({
  tableData,
  openChangeModal,
}: IncomeTableType) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const headerNames = [
    "회계구분",
    "일자",
    "주차",
    "분류",
    "금액",
    "비고",
    "등록일자",
    "",
  ];

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

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고, 두 자리로 맞춤
    const day = String(date.getDate()).padStart(2, "0"); // 일을 두 자리로 맞춤

    return `${year}-${month}-${day}`;
  };

  const formatAccountingType = (accountingType: string) => {
    switch (accountingType) {
      case "current":
        return "당기";
      case "prior":
        return "전기";
      case "broughtForwardFromPrior":
        return "전기이월";
      case "next":
        return "차기";
      case "carriedForwardToNext":
        return "차기이월";
      case "budget":
        return "예산";
      default:
        return "입력 없음"; // or handle it as needed
    }
  };

  const formatWeekNumber = (weekNumber: string) => {
    switch (weekNumber) {
      case "week1":
        return "1주차";
      case "week2":
        return "2주차";
      case "week3":
        return "3주차";
      case "week4":
        return "4주차";
      case "week5":
        return "5주차";
      default:
        return "입력 없음"; // or handle it as needed
    }
  };

  return (
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
            .map((tableData, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row" align="center">
                  {formatAccountingType(tableData.accountingType)}
                </TableCell>
                <TableCell align="center">
                  {formatDate(tableData.incomeDate)}
                </TableCell>
                <TableCell align="center">{formatWeekNumber(tableData.weekNumber)}</TableCell>
                <TableCell align="center">{tableData.classification}</TableCell>
                <TableCell align="center">
                  {tableData.amount.toLocaleString()}
                </TableCell>
                <TableCell align="center">{tableData.description}</TableCell>
                <TableCell align="center">{tableData.createDate}</TableCell>
                <TableCell align="center">
                  <button
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                    onClick={() => openChangeModal(tableData)}
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
  );
}
