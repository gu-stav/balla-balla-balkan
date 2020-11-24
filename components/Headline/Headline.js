import cn from "classnames";

import styles from "./Headline.module.css";

const Headline = ({ level, as, children, className, ...props }) => {
  const Tag = `h${as | level}`;

  return (
    <Tag className={cn(styles[`h${as | level}`], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Headline;
