import cn from "classnames";

import styles from "./Stack.module.css";

const Stack = ({
  tagName = "div",
  direction = "vertical",
  center = false,
  gap = "regular",
  children,
  className,
}) => {
  const Tag = tagName;

  return (
    <Tag
      className={cn(
        styles.stack,
        styles[direction],
        styles[`gap--${gap}`],
        { [styles.centered]: center },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Stack;
