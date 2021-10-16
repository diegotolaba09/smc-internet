import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { footerStyles, styles } from "./styles.css";

export default function Footer() {
  const classes = footerStyles();

  return (
    <Container
      id="contact"
      classes={{ root: classes.footerContainer }}
      maxWidth={false}
      disableGutters
    >
      <Container classes={{ root: classes.footer }}>
        <Typography variant="p" component="p">
          Copyright © 2020 | Todos los derechos reservados a SMC Internet.
        </Typography>
        <Box sx={styles.iconFooter}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
      </Container>
    </Container>
  );
}
