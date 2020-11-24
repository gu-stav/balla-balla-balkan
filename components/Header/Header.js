import Link from "next/link";

import styles from "./Header.module.css";

const Header = ({
  name = "Ballaballa Balkan",
  items = [
    ["/episoden", "Alle Episoden"],
    ["/unterstuetzen", "Unterstützen"],
  ],
}) => (
  <header className={styles.header}>
    <Link href="/">
      <a>{name}</a>
    </Link>

    <nav>
      {items.map(([href, label]) => (
        <Link href={href}>
          <a>{label}</a>
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
