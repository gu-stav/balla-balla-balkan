import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />

    <main className={styles.main}>{children}</main>

    <Footer items={[
      ['/impressum', 'Impressum'],
      ['/datenschutz', 'Datenschutz'],
      ['/unterstuetzen', 'Unterstützen']
    ]} />
  </>
);

export default Layout;
