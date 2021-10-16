import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Point from "./Point";
import { pointStyles } from "./styles.css";

export default function ContentPoints() {
  const classes = pointStyles();

  const arrayPoints = () => {
    let data = [];
    for (let i = 0; i < 25; i++) {
      data.push(i);
    }
    return data;
  };

  return (
    <Grid
      container
      spacing={{ md: 2 }}
      columns={{ sm: 12, md: 12 }}
      classes={{ root: classes.pointsContainer }}
    >
      {arrayPoints().map((_, index) => (
        <Box className={classes.contentBox} key={index}>
          <Point />
        </Box>
      ))}
    </Grid>
  );
}
