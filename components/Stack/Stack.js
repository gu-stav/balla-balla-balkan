import cn from 'classnames';

import styles from './Stack.module.css';

const Stack = ({ tagName = 'div', direction = "vertical", children, className }) => {
  const Tag = tagName;

  return <Tag className={cn(styles.stack, className)}>
    {children}
  </Tag>
};

export default Stack;
