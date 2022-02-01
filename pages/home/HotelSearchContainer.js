/*
 * Home Page Container
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { compareAsc, isPast } from "date-fns";
import { useRouter } from "next/router";

import { useHotelListStateValue } from "../../context/stateProvider";
import Header from "../../component/Header";
import { filterByDate, getNumberOfNights } from "./utility";
import { setSearchedHotel, setTotalNights } from "../../context/action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const HotelSearch = () => {
  const router = useRouter();
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const [hotels, dispatch] = useHotelListStateValue();

  const handleSearch = () => {
    const diff = compareAsc(fromDate, toDate);
    const isPastDate = isPast(fromDate);
    if (diff !== -1 || isPastDate) {
      setOpen(true);
    } else {
      const numberOfNights = getNumberOfNights(fromDate, toDate);
      dispatch(setTotalNights(numberOfNights));

      const filteredHotel = filterByDate(fromDate, toDate, hotels.allHotels);
      dispatch(setSearchedHotel(filteredHotel));

      router.push("hotellist");
    }
  };

  const handleAlertClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} sx={{ mx: 0 }}>
        <Header />
        <Grid
          container
          sx={{
            height: "90vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            px: 20,
          }}
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
                    value={fromDate}
                    onChange={(newValue) => {
                      setFromDate(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                    minDate={new Date()}
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
                    value={toDate}
                    onChange={(newValue) => {
                      setToDate(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container item sm={2} justifyContent="center" alignItems="center">
              <Button variant="outlined" onClick={handleSearch}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="error" sx={{ width: "100%" }}>
            Given Date range not valid!
          </Alert>
        </Snackbar>
      </Container>
    </React.Fragment>
  );
};

export default HotelSearch;
