import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const outlinedCard = (
  <React.Fragment>
    <CardContent>
      <Grid container>
        <Grid item sx={{ pr: 1 }}>
          <Typography variant="subtitle1" component="h2">
            Name:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: "lighter" }}>
            Hotel Name
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
            125 AED
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
            Dhubai
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function CardContainer() {
  return (
    <Box sx={{ minWidth: 275, width: "auto", mr: 3 }}>
      <Card variant="outlined">{outlinedCard}</Card>
    </Box>
  );
}
