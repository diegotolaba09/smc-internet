import { makeStyles } from "@mui/styles";

export const footerStyles = makeStyles(({ spacing, palette }) => ({
  footerContainer: {
    padding: spacing(1, 0),
    backgroundColor: "#010f2f",
    backgroundImage:
      "linear-gradient(60deg, rgba(2, 79, 248, 0.6) 0%, rgba(120, 61, 255, 0.6) 100%)",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 76,
    borderTop: `2px solid ${palette.secondary.light}`,
  },
  footer: {
    color: palette.common.white,
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const styles = {
  iconFooter: {
    width: 90,
    display: "flex",
    justifyContent: "space-between",
  },
};
