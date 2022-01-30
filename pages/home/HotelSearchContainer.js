/*
 * Recipes Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import { useHotelListStateValue } from "./stateProvider";
import Header from "../../component/Header";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const HotelSearch = ({ hotels }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const [, dispatch] = useHotelListStateValue();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true}>
        <Header />
        <Box
          className={classes.root}
          sx={{ justifyContent: "center", alignItems: "center", flexGrow: 1, overflow: "hidden", px: 3 }}
        >
          <Grid container spacing={3}>
            <Grid container spacing={3} item sm={5} justifyContent="center" alignItems="center">
              <Grid item md={2} xs={4}>
                <Typography variant="h6" component="div">
                  From:
                </Typography>
              </Grid>
              <Grid item md={10} xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={3} item sm={5} justifyContent="center" alignItems="center">
              <Grid item md={2} xs={4}>
                <Typography variant="h6" component="div">
                  To:
                </Typography>
              </Grid>
              <Grid item md={10} xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container item sm={2} justifyContent="center" alignItems="center">
              <Button variant="outlined">Search</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HotelSearch;
