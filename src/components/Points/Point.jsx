import Box from "@mui/system/Box";
import { pointStyles } from "./styles.css";

export default function Point({ index }) {
  const classes = pointStyles();

  return <Box className={classes.point} />;
}
