import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { planStyles } from "./styles.css";
import { plans } from "../../enums/enums";
import Plan from "./Plan";

export default function Plans() {
  const classes = planStyles();

  return (
    <Box id="plans" className={classes.content}>
      <Container classes={{ root: classes.plansContainer }} maxWidth="lg">
        <Typography
          variant="h3"
          component="h3"
          classes={{ h3: classes.titleH3 }}
        >
          CONECTATE A TODA VELOCIDAD CON NUESTROS PLANES
        </Typography>
        <Grid
          container
          spacing={3}
          columns={{ sm: 12, md: 12 }}
          classes={{ root: classes.containerGrid }}
        >
          {plans.map((plan, index) => (
            <Plan plan={plan} key={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
