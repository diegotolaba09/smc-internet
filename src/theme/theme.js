import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      lightGrey: "#ececec",
      grey: "#fafafa",
      darkGrey: "#bdbdbd",
      dark: "#171717",
    },
    primary: {
      light: "#757ce8",
      main: "#3f46b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00",
      contrastText: "#000",
    },
  },
});
