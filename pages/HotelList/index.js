import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { useHotelListStateValue } from "../../context/stateProvider";
import Header from "../../component/Header";
import Slider from "../../component/Slider";
import CardContainer from "../../component/Card";
import { setFilteredHotel } from "../../context/action";
import { sortHotels } from "./utlity";

const Main = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "100vw",
  marginTop: "5%",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
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
  },
}));

const HotelList = () => {
  const [state, dispatch] = useHotelListStateValue();

  const handleSort = (attribute) => {
    const sortedHotel = sortHotels(state.filteredHotels, attribute);
    dispatch(setFilteredHotel(sortedHotel));
  };

  return (
    <Container disableGutters={true} sx={{ mx: 0 }}>
      <Header />

      <Main>
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ py: 2 }} rowSpacing={2} columnSpacing={2}>
          <Grid item md={4}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Total Nights: {state.totalNights}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Button variant="outlined" onClick={() => handleSort("name")}>
              Sort by Name
            </Button>
          </Grid>
          <Grid item md={2}>
            <Button variant="outlined" onClick={() => handleSort("price")}>
              Sort by Price
            </Button>
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
            {state.filteredHotels.map((hotel, index) => {
              return (
                <Grid item sm={6} sx={{ pb: 3 }} key={index}>
                  <CardContainer hotel={hotel} totalNights={state.totalNights} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Main>
    </Container>
  );
};

export default HotelList;
