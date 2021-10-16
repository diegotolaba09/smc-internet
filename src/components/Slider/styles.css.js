import { makeStyles } from "@mui/styles";

export const sliderStyles = makeStyles(({ spacing, palette, shadows }) => ({
  contentSlider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.primary.dark,
    backgroundImage: "linear-gradient(60deg, #024FF8F5 0%, #783DFF 100%)",
  },
  image: {
    width: "100%",
    opacity: "0.45",
  },
  contentTitle: {
    position: "absolute",
    backgroundColor: palette.secondary.light,
    padding: spacing(5, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: shadows[1],
  },
  h3: {
    color: palette.common.white,
    fontSize: "2.2rem !important",
    lineHeight: "3.2rem !important",
    fontWeight: "700 !important",
  },
}));
