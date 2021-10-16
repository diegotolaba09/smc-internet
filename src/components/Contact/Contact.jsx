import Container from "@mui/material/Container";
import { contactStyles } from "./styles.css";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

export default function Contact() {
  const classes = contactStyles();

  return (
    <Container
      id="contact"
      classes={{ root: classes.contactContainer }}
      maxWidth={false}
      disableGutters
    >
      <Container classes={{ root: classes.contact }}>
        <ContactDescription />
        <ContactForm />
      </Container>
    </Container>
  );
}
