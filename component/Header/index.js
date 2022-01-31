import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Link href="/home" passHref>
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hotel Booking
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
