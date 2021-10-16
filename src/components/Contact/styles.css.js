import { makeStyles } from "@mui/styles";

export const contactStyles = makeStyles(({ spacing, palette, shadows }) => ({
  contactContainer: {
    padding: spacing(10, 0),
    backgroundColor: palette.primary.main,
    backgroundImage:
      "linear-gradient(60deg, rgba(2, 79, 248, 0.58) 0%, rgba(120, 61, 255, 0.9) 100%)",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 580,
    boxShadow:
      "0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04)",
  },
  contact: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactTitle: {
    width: "50%",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    padding: spacing(5, 3),
  },
  title: {
    fontSize: "2.8rem !important",
    lineHeight: "3.8rem !important",
    fontWeight: "600 !important",
    color: palette.common.white,
    margin: `${spacing(5, 0, 0)} !important`,
  },
  subtitle: {
    fontSize: "2rem !important",
    lineHeight: "3.8rem !important",
    fontWeight: "300 !important",
    color: palette.common.white,
    margin: `${spacing(0, 0, 7, 0)} !important`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spanTitle: {
    color: palette.secondary.light,
  },
  lineDesign: {
    width: 250,
    border: `1px solid ${palette.secondary.light}`,
    marginRight: 16,
  },
  contactButton: {
    margin: "8px !important",
    width: "-moz-available !important",
    backgroundColor: "#c3e7fd !important",
    color: `${palette.primary.dark} !important`,
  },
  boxInfo: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    color: "white",
    marginTop: 18,
  },
  iconInfo: {
    marginRight: 8,
  },
  input: {
    height: 33,
    width: 270,
    fontSize: "0.9rem",
    padding: "3px 17px",
    margin: 8,
    border: "none",
    borderRadius: "10px",
    outline: 0,
    boxShadow: shadows[2],
  },
  textarea: {
    width: 270,
    maxWifth: 270,
    fontSize: "0.9rem",
    padding: "3px 17px",
    margin: 8,
    border: "none",
    borderRadius: "10px",
    minHeight: 100,
    boxShadow: shadows[2],
    outline: 0,
  },
}));

export const styles = {};
