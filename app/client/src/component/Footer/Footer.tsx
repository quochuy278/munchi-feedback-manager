import { Box, Typography } from "@mui/material";
import munchiLogo from "../../assets/img/munchi.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography>Powerd by</Typography>
      <img src={munchiLogo} alt={"Munchi Logo"} className={styles.logo} />
    </Box>
  );
};

export default Footer;
