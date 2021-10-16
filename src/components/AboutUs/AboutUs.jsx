import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { aboutStyles } from "./styles.css";
import ContentPoints from "../Points/ContentPoints";

export default function AboutUs() {
  const classes = aboutStyles();

  return (
    <Box id="about" className={classes.aboutContainer}>
      {" "}
      <Box className={classes.styleBox}>
        <ContentPoints />
      </Box>
      <Container classes={{ root: classes.welcome }}>
        <Typography variant="h3" component="h3" classes={{ h3: classes.h3 }}>
          ¿Quiénes somos?
        </Typography>
        <Typography variant="p" component="p" classes={{ p: classes.p }}>
          SMC Internet es una empresa radicada en Vaqueros, dedicada a brindar
          soluciones de calidad de comunicaciones e internet. Contamos con una
          vasta experiencia en el rubro de las telecomunicaciones y la
          informática, innovando constantemente en servicios e infraestructura.
        </Typography>
        <Typography variant="p" component="p" classes={{ p: classes.p }}>
          Somos pioneros en brindar conectividad domiciliaria mediante fibra
          óptica extremo a extremo, ofreciendo planes que se adaptan a las
          necesidades del usuario más exigente.
        </Typography>
      </Container>
    </Box>
  );
}
