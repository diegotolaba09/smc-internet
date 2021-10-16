import { Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./containers/Header/Header";
import { theme } from "./theme/theme";
import Content from "./containers/Content/Content";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/" render={() => <Header />} />
      <Route exact path="/" render={() => <Content />} />
      <Route path="/" render={() => <Footer />} />
    </ThemeProvider>
  );
}

export default App;
