import cn from "classnames";

import styles from "./Stack.module.css";

const Stack = ({
  tagName = "div",
  direction = "vertical",
  center = false,
  children,
  className,
}) => {
  const Tag = tagName;

  return (
    <Tag className={cn(styles.stack, { [styles.centered]: center }, className)}>
      {children}
    </Tag>
  );
};

export default Stack;
