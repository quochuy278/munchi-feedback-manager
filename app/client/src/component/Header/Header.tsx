import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "white", placeItems: "center", boxShadow: "none" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          Feedback
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
