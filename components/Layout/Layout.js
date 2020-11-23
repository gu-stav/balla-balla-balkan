import Header from "../Header";

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <>
    <Header />

    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
