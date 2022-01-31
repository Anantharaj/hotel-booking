import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import { useHotelListStateValue } from "../../context/stateProvider";
import Header from "../../component/Header";
import Slider from "../../component/Slider";
import CardContainer from "../../component/Card";
import { setFilteredHotel } from "../../context/action";
import { sortHotels, debounce, throttle, searchByName, searchByPrice, getMinMaxPrice } from "./utlity";
import { Main, Search, SearchIconWrapper, StyledInputBase } from "./styles";

const HotelList = () => {
  const [state, dispatch] = useHotelListStateValue();
  const [searchText, setSearchText] = useState("");
  const [priceMin = 0, priceMax = 100] = getMinMaxPrice(state.allHotels);
  const [sliderValue, setSliderValue] = useState(priceMin);

  const [debouncedFun] = useState((str) =>
    debounce((str) => {
      setSliderValue(priceMin);
      const searchedHotels = searchByName(str, state.searchByDateHotels);
      dispatch(setFilteredHotel(searchedHotels));
    })
  );

  const [throttleFun] = useState((value) =>
    throttle((value) => {
      setSearchText("");
      const filteredHotels = searchByPrice(value, state.searchByDateHotels);
      dispatch(setFilteredHotel(filteredHotels));
    })
  );

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
                <StyledInputBase
                  placeholder="Hotel Name"
                  onChange={(e) => {
                    debouncedFun(e.target.value);
                    setSearchText(e.target.value);
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={searchText}
                />
              </Search>
            </Grid>
            <Grid sx={{ ml: 1 }}>
              <Slider
                sliderValue={sliderValue}
                handleChange={(value) => {
                  setSliderValue(value);
                  throttleFun(value);
                }}
                min={priceMin}
                max={priceMax}
              />
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
