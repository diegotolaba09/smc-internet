import { makeStyles } from "@mui/styles";

export const aboutStyles = makeStyles(({ spacing, palette }) => ({
  aboutContainer: {
    backgroundColor: "#EFF3FF",
  },
  welcome: {
    padding: spacing(8, 0, 18),
    textAlign: "center",
    marginTop: "-110px",
  },
  h3: {
    fontSize: "2.5rem !important",
    fontWeight: "600 !important",
    color: palette.common.dark,
    margin: `${spacing(1, 0, 4)} !important`,
  },
  p: {
    fontSize: "1.15rem",
    lineHeight: "2rem",
    color: palette.common.dark,
    margin: `${spacing(2, 13, 3)} !important`,
  },
  styleBox: {
    width: 220,
    height: 220,
    backgroundColor: palette.secondary.light,
    borderBottomRightRadius: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
