import Link from "@mui/material/Link";
import { mainMenu } from "../../enums/enums";
import { menuStyles } from "./styles.css";

export default function Menu() {
  const classes = menuStyles();

  return (
    <ul className={classes.ul}>
      {mainMenu.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          underline="none"
          classes={{ root: classes.li }}
        >
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
