import { makeStyles } from "@mui/styles";

export const menuStyles = makeStyles(({ spacing, palette }) => ({
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
  },
  li: {
    margin: `${spacing(0, 2)} !important`,
    color: `${palette.common.dark} !important`,
    fontSize: "0.93rem",
  },
}));
