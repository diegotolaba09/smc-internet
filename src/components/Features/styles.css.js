import { makeStyles } from "@mui/styles";

export const featureStyles = makeStyles(
  ({ spacing, palette, shadows, breakpoints }) => ({
    featureContainer: {
      padding: spacing(0),
      backgroundColor: palette.primary.main,
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 620,
    },
    contentLeft: {
      width: "50%",
    },
    featureCard: {
      margin: spacing(14),
      padding: spacing(6.5, 8),
      borderRadius: 20,
      backgroundColor: palette.common.white,
      position: "absolute",
      zIndex: 2,
      boxShadow: shadows[9],
      "&:hover": {
        boxShadow: shadows[20],
      },
      [breakpoints.up("xl")]: {
        right: "35%",
      },
      [breakpoints.down("xl")]: {
        right: "38%",
      },
      [breakpoints.between("1300", "xl")]: {
        right: "29%",
      },
      [breakpoints.down("xl")]: {
        right: "19%",
      },
      [breakpoints.down("lg")]: {
        right: "auto",
        width: "65%",
      },
      [breakpoints.down("md")]: {
        right: "auto",
        width: "70%",
        margin: "7%",
      },
      [breakpoints.down("sm")]: {
        right: "auto",
        width: "80%",
        margin: "4%",
        padding: "12% 6%",
      },
    },
    contentImageRight: {
      width: "50%",
    },
    featureImage: {
      width: "100%",
      height: "100%",
      opacity: "0.5",
      objectFit: "cover",
      "&:hover": {
        opacity: "0.6",
      },
    },
    h3: {
      fontSize: "1.5rem !important",
      lineHeight: "2.2rem !important",
      textAlign: "center",
      fontWeight: "600 !important",
      color: palette.common.dark,
      margin: `${spacing(1, 0, 4)} !important`,
    },
    li: {
      fontSize: "1.2rem",
      lineHeight: "2.2rem",
      fontWeight: 500,
      color: "#333333",
      "&::before": {
        content: "$",
        marginRight: 8,
      },
    },
    span: {
      marginRight: 10,
    },
    ul: {
      listStyle: "none",
    },
  })
);
