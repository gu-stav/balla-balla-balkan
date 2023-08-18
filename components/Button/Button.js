import cn from "classnames";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ href, children, invert = false, ...rest }) => {
  const props = {
    className: cn(
      {
        [styles.link]: !!href,
      },
      {
        [styles.button]: !!!href,
      },
      {
        [styles.invert]: invert,
      }
    ),
  };

  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} {...rest}>
      {children}
    </button>
  );
};

export default Button;
