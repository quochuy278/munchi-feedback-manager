import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#f86106",
      light: "#fba673",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
export default theme;
