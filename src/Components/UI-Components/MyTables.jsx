import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Dropzon from "../UI-Components/DropZon";
import { useSelector, useDispatch } from "react-redux";
import Models from "../UI-Components/Models";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchData,
  deleteData,
} from "../../Stores/toolkits/displayInstituteSlice";
// import { setEditId } from "../../Stores/toolkits/editInstitutSlice";

import { useNavigate } from "react-router-dom";
import { MUIBox, MUITypography } from "../MUI-Component";
import FormikControl from "../Common/FormikControl";
const MyTables = () => {
  // const editId = useSelector((state) => state.editInstituteRedcure.editInstitute.editid);
  // console.log(editId,"-----------------id")
  const navigate = useNavigate();
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

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.displayInstituteRedcure.getInstitute.data
  );
  const qulificationData = useSelector(
    (state) => state.displayInstituteRedcure.getInstitute.data.qualification
  );
  // const editId = useSelector( (state) => state.editInstituteRedcure.editInstitute.editid);
  // console.log("-------data-----------", id);
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, [dispatch]);
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(userData, "------------------");
  const [page, setPage] = useState(0);
  const [deleteid, setDeleteId] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [Editopen, setEditOpen] = useState(false);
  const [Uploadopen, setUploadOpen] = useState(false);
  const [EditId, setEditIds] = useState(false);
  const [uploadId, setUploadIds] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setEditOpen(false);
  };
  const Closeme = () => {
    setOpen(false);
  };
  const EditCloseme = () => {
    setEditOpen(false);
  };

  const handeldelete = async (id) => {
    setOpen(true);
    setDeleteId(id);
  };
  const handelEdit = async (id) => {
    setEditIds(id);
    setEditOpen(true);
  };
  const handelConfirmDelete = async () => {
    dispatch(deleteData(deleteid));
    // toast.success("institute deleted successfully");
    setOpen(false);
  };

  const handelConfirmEdit = async () => {
    navigate(`/edit/${EditId}`);
    toast.success("institute update successfully");
    setEditOpen(false);
  };

  const searchData = async (e) => {
    setSearchQuery(e.target.value);
    dispatch(fetchData(e.target.value));
  };

  const Qualification = ["PHD", " PG", "Graduation", "12th", "10th"];

  const handelupload = (id) => {
    setUploadIds(id);
    console.log(qulificationData);
    setUploadOpen(true);
  };
  const handelConfirmUpload = (values) => {
    console.log(values);
  };
  const handleCloseUpload = () => {
    setUploadOpen(false);
  };
  return (
    <>
      <Box  className="searh-date">
        {/* <Searchbytime onSearch={handleSearch} /> */}
        <TextField
          type="date"
          placeholder="enter your number here"
          size="large"
          variant="outlined"
          className="date-time"
        />
        <TextField
          variant="outlined"
          placeholder="search by Institute Name ,TPO name or Qualification"
          size="large"
          value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          onChange={(e) => searchData(e)}
          className="searchbox"
          sx={{ marginLeft: "50px" }}
          InputProps={{
            style: { paddingRight: "0.5em" },

            endAdornment: <SearchIcon />,
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="theadcolor">
              <TableCell sx={{ color: "black" }}
              >S.No</TableCell>
              <TableCell sx={{ color: "black" }}>Institute Name</TableCell>
              <TableCell sx={{ color: "black" }}>TPO Name</TableCell>
              <TableCell sx={{ color: "black" }}>No. of Students</TableCell>
              <TableCell sx={{ color: "black" }}>Qualification</TableCell>
              <TableCell sx={{ color: "black" }}>Assign Test</TableCell>
              <TableCell sx={{ color: "black" }}>Schedule Test</TableCell>
              <TableCell sx={{ color: "black" }}>Action</TableCell>
              {/* Add more table header cells if needed */}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "black" }}>
            {data.length ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        borderLeft: "1px solid white",
                      }}
                    >
                      {/* {index + 1} */}
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
                    <TableCell className="borderrght">
                      <DeleteForeverIcon
                        sx={{
                          color: "red",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handeldelete(row._id)}
                      />
                      <EditIcon
                        sx={{ color: "green", cursor: "pointer" }}
                        onClick={() => handelEdit(row._id)}
                      />
                      <UploadFileIcon
                        sx={{
                          color: "#0458B7",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                        onClick={() => handelupload(row._id)}
                      />
                    </TableCell>

                    {/* Render more table cells based on your data structure */}
                  </TableRow>
                ))
            ) : (
              <TableRow className="no-data-fond">
                <TableCell
                  sx={{
                    color: "red",
                    fontSize: "18px",
                    border: "none",
                    position: "absolute",
                    left: "50%",
                  }}
                >
                  Data not found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {data.length ? (
          <TablePagination
            sx={{ color: "black" }}
            rowsPerPageOptions={[5, 10, 25]} // Customize the rows per page options
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : (
          " "
        )}
      </TableContainer>
      <Models
        handelConfirmDelete={handelConfirmDelete}
        handleClose={handleClose}
        Closeme={Closeme}
        open={open}
        label="Delete User"
        title="Are you sure want to delete "
      />
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
              Edit User
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
            Are you sure want to edit
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
              Confirm
            </Button>
            <Button
              variant="contained"
              className="mysubbtn mysubbtnreset"
              onClick={() => setEditOpen(false)}
              sx={{ marginLeft: "50px", background: "green" }}
            >
              Cancle
            </Button>
          </Button>
        </Box>
      </Modal>
      {/* --------------------------------------------------------------------- */}

      <Modal
        open={Uploadopen}
        onClose={handleCloseUpload}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="head-upload-modal">
          <Typography variant="h6" className="upload-student">
            Upload Students
          </Typography>
          <Box>
            <Box className="uni-inst">
              <Box className="university_name">
                <Typography variant="body1">Univesity Name:</Typography>
                <Typography variant="body1">-I.K Gujral PTU</Typography>
              </Box>
              <Box className="institute_name">
                <Typography variant="body1">Institute Name:</Typography>
                <Typography variant="body1">
                  Chandigarh Group of College
                </Typography>
              </Box>
            </Box>
            <Box className="qualification">
              {/* <MUITypography variant="h6"> Select Qualification</MUITypography> */}
              <MUIBox className="upload-select" sx={{width:'100%'}}>
                <FormikControl
                  options={Qualification}
                  control="multiselect"
                  label="Qualification"
                  name="qualification"
                  className="add-form-control pl-2"
                  // onChange={onChange}
                  // onBlur={onBlur}
                  // value={Qualification}
                />
              </MUIBox>
            </Box>
            <Box className="dropdone" >
              <Dropzon />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "100px",
              }}
            >
              <Button variant="contained" onClick={handelConfirmUpload}>
                Submit
              </Button>
              <Button
                variant="outlined"
                sx={{ marginLeft: "30px" }}
                onClick={() => setUploadOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* ----------------------------------------------------------------------- */}
      <ToastContainer />
    </>
  );
};

export default MyTables;
