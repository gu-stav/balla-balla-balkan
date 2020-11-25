import cn from "classnames";

import styles from "./Paragraph.module.css";

const Paragraph = ({ className, children }) => (
  <p className={cn(styles.p, className)}>{children}</p>
);

export default Paragraph;
