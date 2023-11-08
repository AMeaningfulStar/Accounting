import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function createData(
  name: string,
  expenditureDate: string,
  week: string,
  classification: string,
  money: number,
  info: string,
  registrationDate: string
) {
  return {
    name,
    expenditureDate,
    week,
    classification,
    money,
    info,
    registrationDate,
  };
}

const rows = [
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
  createData(
    "당기",
    "2023-11-01",
    "1주차",
    "부서운영비",
    240000,
    "부서운영",
    "2023-11-08"
  ),
];

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function TableBox() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="custom pagination table">
        <TableHead className="bg-gray-300">
          <TableRow>
            <TableCell align="center" className="font-semibold text-sm">
              회계 구분
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              일자
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              주차
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              분류
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              금액
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              비고
            </TableCell>
            <TableCell align="center" className="font-semibold text-sm">
              등록일자
            </TableCell>
            <TableCell
              align="center"
              className="font-semibold text-sm"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.expenditureDate}</TableCell>
              <TableCell align="center">{row.week}</TableCell>
              <TableCell align="center">{row.classification}</TableCell>
              <TableCell align="center">{row.money}</TableCell>
              <TableCell align="center">{row.info}</TableCell>
              <TableCell align="center">{row.registrationDate}</TableCell>
              <TableCell align="center">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
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
