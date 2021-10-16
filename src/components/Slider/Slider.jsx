import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import homeImage from "../../assets/images/home-image.jpg";
import { sliderStyles } from "./styles.css";

export default function Slider() {
  const classes = sliderStyles();

  return (
    <Box className={classes.contentSlider}>
      <img src={homeImage} alt="Fibra Óptica" className={classes.image} />
      <Box className={classes.contentTitle}>
        <Typography variant="h3" component="h3" classes={{ h3: classes.h3 }}>
          INTERNET POR
        </Typography>{" "}
        <Typography variant="h3" component="h3" classes={{ h3: classes.h3 }}>
          FIBRA OPTICA
        </Typography>
      </Box>
    </Box>
  );
}
