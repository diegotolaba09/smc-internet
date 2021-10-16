import Container from "@mui/material/Container";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import Features from "../../components/Features/Features";
import Plans from "../../components/Plans/Plans";
import Slider from "../../components/Slider/Slider";
import Tech from "../../components/Tech/Tech";

export default function Content() {
  return (
    <Container maxWidth={false} disableGutters>
      <Slider />
      <AboutUs />
      <Features />
      <Plans />
      <Tech />
      <Contact />
    </Container>
  );
}
