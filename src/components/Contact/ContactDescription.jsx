import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { contactStyles } from "./styles.css";

export default function ContactDescription() {
  const classes = contactStyles();
  return (
    <Box className={classes.contactTitle}>
      <Typography variant="h3" component="h3" classes={{ h3: classes.title }}>
        SOLICITA TU <span className={classes.spanTitle}>SERVICIO</span>
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        classes={{ h3: classes.subtitle }}
      >
        <span className={classes.lineDesign} />
        ¡Completa tus datos!
      </Typography>
      <Box className={classes.boxInfo}>
        <EmailIcon className={classes.iconInfo} />
        <Typography variant="p" component="p" classes={{ p: classes.info }}>
          comercial@smc-internet.com.ar
        </Typography>
      </Box>
      <Box className={classes.boxInfo}>
        <PhoneIphoneIcon className={classes.iconInfo} />
        <Typography variant="p" component="p" classes={{ p: classes.info }}>
          (0387) 156152804
        </Typography>
      </Box>
    </Box>
  );
}
