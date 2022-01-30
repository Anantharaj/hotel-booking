import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { useHotelListStateValue } from "../home/stateProvider";
import Header from "../../component/Header";
import Slider from "../../component/Slider";
import CardContainer from "../../component/Card";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Main = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  marginTop: "5%",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "blue", //alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    background: "none",
    borderRadius: "25px",
    border: "1px solid #556cd6",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HotelList = () => {
  const [hotels] = useHotelListStateValue();

  const classes = useStyles();
  return (
    <Container disableGutters={true}>
      <Header />

      <Main>
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ py: 2 }} rowSpacing={2} columnSpacing={2}>
          <Grid item md={4}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Total Nights: 5
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Button variant="outlined">Sort by Name</Button>
          </Grid>
          <Grid item md={2}>
            <Button variant="outlined">Sort by Price</Button>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid container item direction="column" md={4}>
            <Grid sx={{ mb: 4 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Hotel Name" inputProps={{ "aria-label": "search" }} />
              </Search>
            </Grid>
            <Grid sx={{ ml: 1 }}>
              <Slider />
            </Grid>
          </Grid>
          <Grid container item md={8}>
            <Grid sm={6} sx={{ pb: 3 }}>
              <CardContainer />
            </Grid>
            <Grid sm={6} sx={{ pb: 3 }}>
              <CardContainer />
            </Grid>
            <Grid sm={6} sx={{ pb: 3 }}>
              <CardContainer />
            </Grid>
            <Grid sm={6} sx={{ pb: 3 }}>
              <CardContainer />
            </Grid>
          </Grid>
        </Grid>
      </Main>
    </Container>
  );
};

export default HotelList;
