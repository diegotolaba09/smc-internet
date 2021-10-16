import { logoStyles } from "./styles.css";

export function Logo({ src, alt }) {
  const classes = logoStyles();

  return <img src={src} alt={alt} className={classes.logo} />;
}
