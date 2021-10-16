import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles(({ spacing, shadows, palette }) => ({
  header: {
    backgroundColor: palette.common.white,
    boxShadow: shadows[3],
  },
  containerHeader: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing(2, 0),
  },
}));
