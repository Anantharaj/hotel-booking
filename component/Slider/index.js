import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

export default function InputSlider({ handleChange, sliderValue, min, max }) {
  const handleSliderChange = (event, newValue) => {
    handleChange(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Price Filter
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof sliderValue === "number" ? sliderValue : 0}
            onChange={handleSliderChange}
            min={min}
            max={max}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: "lighter" }}>
            {sliderValue}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
