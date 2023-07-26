import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Models from "./Models";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { visuallyHidden } from "@mui/utils";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {  Typography } from "@mui/material";
import {
  fetchData,
  deleteData,
} from "../../Stores/toolkits/displayInstituteSlice";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dropzon from "../UI-Components/DropZon";
import { MUIBox } from "../MUI-Component";
import FormikControl from "../Common/FormikControl";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
let rows ;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  // {
  //   id: "SoNo",
  //   numeric: false,
  //   disablePadding: true,
  //   label: "So No",
  // },

  {
    id: "institute",
    numeric: false,
    disablePadding: false,
    label: "Institute Name",
    
    
    
  },
  {
    id: "TPOName",
    numeric: false,
    disablePadding: false,
    label:"TPO Name",
  },
  {
    id: "NoofStudents",
    numeric: false,
    disablePadding: false,
    label: "No. of Students",
  },
  {
    id: "qualification",
    numeric: false,
    disablePadding: false,
    label: "Qualification",
  },
  {
    id: "AssignTest",
    numeric: false,
    disablePadding: false,
    label: "Assign Test",
  },
  {
    id: "ScheduleTest",
    numeric: false,
    disablePadding: false,
    label: "Schedule Test",
  },

];

function EnhancedTableHead(props) {
  const { t } = useTranslation();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow  >
        <TableCell padding="checkbox" >
        </TableCell>
        <TableCell className="table-header" >{t("So No")}</TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {t(headCell.label)}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      
        <TableCell >{t("Action")}</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  // const { numSelected } = props;

  return <Box></Box>;
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function SortedTable() {
  const { t } = useTranslation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteid, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [Editopen, setEditOpen] = useState(false);
  const [EditId, setEditIds] = useState(false);
  const [Uploadopen, setUploadOpen] = useState(false);
  const [uploadId, setUploadIds] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleRequestSort = (event, property) => {
    
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.displayInstituteRedcure.getInstitute.data
  );
  rows = data;
  console.log(rows, "---------------------data row");
  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
  // ------------togle list
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };
  // delete function
  const handeldelete = async (id) => {
    setOpen(true);
    setDeleteId(id);
    handleCloses();
  };
  const handelConfirmDelete = async () => {
    dispatch(deleteData(deleteid));
    // toast.success("institute deleted successfully");
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Closeme = () => {
    setOpen(false);
  };
  // ---------------------------------

  // edit function -------------------------
  const handleCloseEdit = () => {
    setEditOpen(false);
  };
  const EditCloseme = () => {
    setEditOpen(false);
  };
  const handelEdit = async (id) => {
    setEditIds(id);
    setEditOpen(true);
  };
  const handelConfirmEdit = async () => {
    navigate(`/edit/${EditId}`);
    toast.success("institute update successfully");
    setEditOpen(false);
  };
  // ---------------------------
  // ------------------upload function-------------------
  const Qualification = ["PHD", " PG", "Graduation", "12th", "10th"];
  const handelupload = (id) => {
    setUploadIds(id);
    // console.log(qulificationData);
    setUploadOpen(true);
  };
  const handelConfirmUpload = (values) => {
    console.log(values);
  };
  const handleCloseUpload = () => {
    setUploadOpen(false);
  };


  // -------------------------------------------


  // search-----------------------------------------
  const searchData = async (e) => {
    setSearchQuery(e.target.value);
    dispatch(fetchData(e.target.value));
  };

  // search ------------------------------------------
  return (
    <Box sx={{ width: "100%" }}>
      {/* ------------ */}
      <Box className="searh-date">
        {/* <Searchbytime onSearch={handleSearch} /> */}
        <TextField
          type="date"
          placeholder="enter your number here"
          size="large"
          variant="outlined"
          className="date-time"
          disableRipple
        />
        <TextField
          variant="outlined"
          placeholder={t("Search by Institute Name ,TPO name or Qualification")}
          size="large"
          value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          onChange={(e) => searchData(e)}
          className="searchbox"
          disableRipple
          sx={{ marginLeft: "50px" }}
          InputProps={{
            style: { paddingRight: "0.5em" },

            endAdornment: <SearchIcon />,
          }}
        />
      </Box>
      {/* ------------- */}
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              t={t}
            />
            <TableBody>
              {data.length? visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.SoNo)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.SoNo}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      {/* <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        /> */}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell>{row.institute}</TableCell>
                    <TableCell>{row.TPOName ? row.TPOName : "----"}</TableCell>
                    <TableCell>
                      {row.NoofStudents ? row.NoofStudents : "----"}
                    </TableCell>
                    <TableCell>{row.qualification.join(", ")}</TableCell>
                    <TableCell>
                      {row.AssignTest ? row.AssignTest : "----"}
                    </TableCell>
                    <TableCell>
                      {row.ScheduleTest ? row.ScheduleTest : "----"}
                    </TableCell>
                    <TableCell>
                      {/* <span className="doubts" onClick={toggleList}>
                        ...
                      </span> */}
                      {/* ------------ */}
                      <Button
                        id="basic-button"
                        aria-controls={opens ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={opens ? "true" : undefined}
                        onClick={handleClicks}
                      >
                        <span className="doubts">...</span>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={opens}
                        onClose={handleCloses}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={() => handeldelete(row._id)}>
                          
                          {t("Delete file")}
                        </MenuItem>
                        <MenuItem  onClick={() => handelEdit(row._id)}>{t("Edit file")}</MenuItem>
                        <MenuItem   onClick={() => handelupload(row._id)}>{t("Upload file")}</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              }): <TableRow className="no-data-fond">
              <TableCell
                sx={{
                  color: "red",
                  fontSize: "18px",
                  border: "none",
                  position: "absolute",
                  left: "50%",
                }}
              >
                
                {t("Data not found")}
              </TableCell>
            </TableRow>}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {data.length ?   <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />:" "}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        // label="Dense padding"
        label={t("Dense padding")}
      
      />
      <Models
        handelConfirmDelete={handelConfirmDelete}
        handleClose={handleClose}
        Closeme={Closeme}
        open={open}
        label="Delete User"
        title="Are you sure want to delete "
      />
      <ToastContainer />

      {/* edit modal */}
      <Modal
        open={Editopen}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "25%", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             
              {t("Edit User")}
            </Typography>
            <Button
              onClick={EditCloseme}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseIcon sx={{ color: "black", fontSize: "30px" }} />
            </Button>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
            {t("Are you sure want to edit")}
          </Typography>
          <Button
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              className="mysubbtn"
              sx={{ marginLeft: "50px", background: "red" }}
              onClick={handelConfirmEdit}
            >
              
              {t("Confirm")}
            </Button>
            <Button
              variant="contained"
              className="mysubbtn mysubbtnreset"
              onClick={() => setEditOpen(false)}
              sx={{ marginLeft: "50px", background: "green" }}
            >
              
              {t("Cancel")}
            </Button>
          </Button>
        </Box>
      </Modal>
      {/* edit modal */}
      {/* upload modal */}
     
      {/* upload modal */}
    </Box>
  );
}
