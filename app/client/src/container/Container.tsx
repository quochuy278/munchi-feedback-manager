import { Box } from "@mui/material";
import React from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Box className={styles.container}>{children}</Box>;
};

export default Container;
