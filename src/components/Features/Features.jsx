import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { featureStyles } from "./styles.css";
import studioBg from "../../assets/images/studio-bg.jpg";
import { listFeatures } from "../../enums/enums";

export default function Features() {
  const classes = featureStyles();

  return (
    <Container
      classes={{ root: classes.featureContainer }}
      maxWidth={false}
      disableGutters
    >
      <Box className={classes.contentLeft}>
        <Box className={classes.featureCard}>
          <Typography variant="h3" component="h3" classes={{ h3: classes.h3 }}>
            ¿Que puedo hacer con una conexión de Fibra Óptica?
          </Typography>
          <ul className={classes.ul}>
            {listFeatures.map((list, index) => (
              <li key={index} className={classes.li}>
                ☑️ <span className={classes.span} /> {list}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box className={classes.contentImageRight}>
        <img className={classes.featureImage} src={studioBg} alt="Studio BG" />
      </Box>
    </Container>
  );
}
