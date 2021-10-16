import Container from "@mui/material/Container";
import logo from "../../assets/images/logo.png";
import { Logo } from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import { headerStyles } from "./styles.css";

export default function Header() {
  const classes = headerStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth="lg" classes={{ root: classes.containerHeader }}>
        <Logo src={logo} alt={"SMC Internet"} />
        <Menu />
      </Container>
    </header>
  );
}
