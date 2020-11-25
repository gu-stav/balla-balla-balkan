import Link from 'next/link';

import Stack from '../Stack';

import styles from './Footer.module.css';

const Footer = ({ items = [] }) => <footer className={styles.footer}>
  <Stack tagName="nav" direction="horizontal" className={styles.nav}>
    {items.map(([ href, label ]) => (
      <Link href={href}>
        <a className={styles.item}>
          {label}
        </a>
      </Link>
    ))}
  </Stack>
</footer>;

export default Footer;
