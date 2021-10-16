import { makeStyles } from "@mui/styles";

export const pointStyles = makeStyles(({ palette }) => ({
  pointsContainer: {
    width: "50% !important",
    height: "50% !important",
    marginLeft: "-40px !important",
    marginTop: "-40px !important",
  },
  point: {
    borderRadius: "50%",
    backgroundColor: palette.common.white,
    width: 4,
    height: 4,
  },
  contentBox: {
    width: "20%",
  },
}));
