import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { contactStyles } from "./styles.css";

export default function ContactForm() {
  const classes = contactStyles();

  return (
    <Box className={classes.contactForm}>
      <input className={classes.input} placeholder="Nombre y Apellido"></input>
      <input className={classes.input} placeholder="Email"></input>
      <input className={classes.input} placeholder="Asunto"></input>
      <textarea className={classes.textarea} placeholder="Mensaje"></textarea>
      <Button
        variant="contained"
        className={classes.contactButton}
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </Box>
  );
}
