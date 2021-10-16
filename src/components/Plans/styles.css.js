import { makeStyles, styled } from "@mui/styles";
import Paper from "@mui/material/Paper";

export const planStyles = makeStyles(({ spacing, palette }) => ({
  content: {
    backgroundColor: "#f1f5ff",
  },
  plansContainer: {
    padding: spacing(9, 0, 12),
    textAlign: "center",
  },
  containerGrid: {},
  titleH3: {
    fontSize: "2.2rem !important",
    lineHeight: "2.6rem !important",
    textAlign: "center",
    fontWeight: "600 !important",
    color: palette.common.dark,
    margin: `${spacing(5, 0, 10)} !important`,
  },
  h3: {
    fontSize: "2.2rem !important",
    lineHeight: "3rem !important",
    textAlign: "center",
    fontWeight: "600 !important",
    color: palette.common.white,
    backgroundColor: palette.primary.dark,
    padding: spacing(1, 2),
    width: "100%",
    margin: `${spacing(1, 0, 4)} !important`,
    letterSpacing: "0.05em",
  },
  h3Hover: {
    fontSize: "2.2rem !important",
    lineHeight: "3rem !important",
    textAlign: "center",
    fontWeight: "600 !important",
    color: palette.common.white,
    backgroundColor: "#031768",
    padding: spacing(1, 2),
    width: "100%",
    margin: `${spacing(1, 0, 4)} !important`,
    letterSpacing: "0.05em",
  },
  velocityPlan: {
    fontSize: "2.8rem !important",
    backgroundColor: "transparent",
  },
  spanH3: {
    fontSize: "1.8rem",
    fontWeight: 300,
  },
  itemGrid: {
    padding: spacing(6, 2, 4),
  },
  buttonPlan: {
    backgroundColor: `#c3e7fd !important`,
    color: `${palette.primary.dark} !important`,
    padding: `${spacing(1.4, 8)} !important`,
    fontWeight: "700 !important",
    borderRadius: "15px !important",
  },
  buttonPlanHover: {
    backgroundColor: `#031768 !important`,
    color: `${palette.common.white} !important`,
    padding: `${spacing(1.4, 8)} !important`,
    fontWeight: "700 !important",
    borderRadius: "15px !important",
  },
}));

export const Item = styled(Paper)(({ theme }) => {
  return {
    padding: theme.spacing(5, 2, 5),
    textAlign: "center",
    color: `${theme.palette.common.white} !important`,
    borderRadius: "20px !important",
    backgroundColor: `${theme.palette.primary.dark} !important`,
    backgroundImage:
      "linear-gradient(60deg, rgba(2, 79, 248, 0.58) 0%, rgba(120, 61, 255, 0.9) 100%)",
    height: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transition: theme.transitions.create(
      "transform",
      theme.transitions.duration.standard
    ),
    "&:hover": {
      transform: "scale(1.04, 1.09)",
      boxShadow: `${theme.shadows[8]} !important`,
      backgroundColor: `${theme.palette.secondary.light} !important`,
      backgroundImage:
        "linear-gradient(90deg, rgba(255,106,34,1) 0%, rgba(255,138,80,1) 100%);",
    },
  };
});
