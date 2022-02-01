/*
 * Hotel List Card Component
 *
 * After Search, users see of our App, at the '/hotellist' route.
 * Inside a page it acts as hotel information container
 */

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const outlinedCard = (hotel, totalNights) => (
  <React.Fragment>
    <CardContent sx={{ width: "400px", height: "120px" }}>
      <Grid container>
        <Grid item sx={{ pr: 1 }}>
          <Typography variant="subtitle1" component="h2">
            Name:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: "lighter" }}>
            {hotel.name}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sx={{ pr: 1 }}>
          <Typography variant="subtitle1" component="h2">
            Price:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: "lighter" }}>
            {hotel.price * totalNights} AED
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sx={{ pr: 1 }}>
          <Typography variant="subtitle1" component="h2">
            City:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: "lighter" }}>
            {hotel.city}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function CardContainer({ hotel, totalNights }) {
  return (
    <Box sx={{ minWidth: 275, mr: 3 }}>
      <Card variant="outlined">{outlinedCard(hotel, totalNights)}</Card>
    </Box>
  );
}

CardContainer.propTypes = {
  /**
   * Hotel information as single object
   */
  hotel: PropTypes.object,
  /**
   * Total nights from selected date range
   */
  totalNights: PropTypes.number,
};
