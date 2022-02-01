/*
 * Hotel List Slider Component
 *
 * After Search, users see of our App, at the '/hotellist' route.
 * It acts as price filiter
 */

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function InputSlider({ handleChange, sliderValue, min, max }) {
  const handleSliderChange = (event, newValue) => {
    handleChange(newValue);
  };

  return (
    <Box sx={{ px: 2 }}>
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
            {sliderValue} PD
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

InputSlider.propTypes = {
  /**
   * Callback method from slider
   */
  handleChange: PropTypes.func,
  /**
   * Slider value from slide position
   */
  sliderValue: PropTypes.number,
  /**
   * Minimum value form available hotellist
   */
  min: PropTypes.number,
  /**
   * Maximum value form available hotellist
   */
  max: PropTypes.number,
};
