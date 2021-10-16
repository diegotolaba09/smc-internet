import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Item, planStyles } from "./styles.css";
import { useHover } from "../../funtions/Hooks";

export default function Plan({ plan }) {
  const [hoverRef, isHovered] = useHover();
  const classes = planStyles();

  return (
    <Grid item md={4} classes={{ root: classes.itemGrid }} ref={hoverRef}>
      <Item>
        <Typography
          variant="h3"
          component="h3"
          classes={{ h3: isHovered ? classes.h3Hover : classes.h3 }}
        >
          <span className={classes.spanH3}>PLAN</span> <br /> {plan.title}
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          classes={{ h3: `${classes.velocityPlan} ${classes.h3}` }}
        >
          {plan.velocity}
        </Typography>
        <Button
          variant="contained"
          className={isHovered ? classes.buttonPlanHover : classes.buttonPlan}
        >
          Contactar
        </Button>
      </Item>
    </Grid>
  );
}
