import { Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./containers/Header/Header";
import { theme } from "./theme/theme";
import Content from "./containers/Content/Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/" render={() => <Header />} />
      <Route exact path="/" render={() => <Content />} />
    </ThemeProvider>
  );
}

export default App;
