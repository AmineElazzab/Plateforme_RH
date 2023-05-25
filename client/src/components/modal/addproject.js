import * as React from "react";
import { useState, useCallback } from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  Modal,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { parseISO } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState({
    projectname: "",
    projectdescription: "",
    projecttype: "",
    projectpriority: "",
    projectstartdate: "",
    projectenddate: "",
    projectstartdate: parseISO(new Date().toISOString()),
    projectenddate: parseISO(new Date().toISOString()),
  });

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button
        variant="contained"
        sx={{
          height: 37,
          width: 240,
          color: "white",
          mt: "26px",
          py: 3,
          backgroundColor: "#0073F9",
          borderRadius: "6px",
          fontSize: "13px",
        }}
        onClick={handleOpen}
      >
        Nouveau Projet
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader
                sx={{
                  backgroundColor: "#0073F9",
                  color: "white",
                  textAlign: "center",
                  "& .MuiCardHeader-title": {
                    fontSize: "20px",
                    fontWeight: "bold",
                    mb: 2,
                  },
                }}
                title="Add Project"
              />

              <CardContent>
                <Stack spacing={3} sx={{ maxWidth: 400 }}>
                  <TextField
                    required
                    id="filled-required"
                    label="Project Name"
                    variant="filled"
                    fullWidth
                    name="projectname"
                    onChange={handleChange}
                    value={values.projectname}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Project Description"
                    variant="filled"
                    fullWidth
                    name="projectdescription"
                    onChange={handleChange}
                    value={values.projectdescription}
                  />

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Project Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      name="projecttype"
                      value={values.projecttype}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="internal">Internal</MenuItem>
                      <MenuItem value="external">External</MenuItem>
                    </Select>
                  </FormControl>

                  <DatePicker
                    label="Project Start Date"
                    name="projectstartdate"
                    value={values.projectstartdate}
                    onChange={(e) => {
                      setValues((prevState) => ({
                        ...prevState,
                        projectstartdate: e,
                      }));
                    }}
                  />

                  <DatePicker
                    label="Project End Date"
                    name="projectenddate"
                    value={values.projectenddate}
                    onChange={(e) => {
                      setValues((prevState) => ({
                        ...prevState,
                        projectenddate: e,
                      }));
                    }}
                  />

                  <FormControl sx={{ mt: 2, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Project Priority</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={values.projectpriority}
                      name="projectpriority"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>01</MenuItem>
                      <MenuItem value={2}>02</MenuItem>
                      <MenuItem value={3}>03</MenuItem>
                      <MenuItem value={4}>04</MenuItem>
                      <MenuItem value={5}>05</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button type="submit" sx={{ backgroundColor: "#0073F9" }} variant="contained">
                  Add
                </Button>
              </CardActions>
            </Card>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
