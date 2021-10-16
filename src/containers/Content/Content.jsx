import Container from "@mui/material/Container";
import AboutUs from "../../components/AboutUs/AboutUs";
import Features from "../../components/Features/Features";
import Plans from "../../components/Plans/Plans";
import Slider from "../../components/Slider/Slider";

export default function Content() {
  return (
    <Container maxWidth={false} disableGutters>
      <Slider />
      <AboutUs />
      <Features />
      <Plans />
    </Container>
  );
}
