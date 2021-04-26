import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ footerMargin, children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer
      marginTop={footerMargin}
      items={[
        ["/impressum", "Impressum"],
        ["/datenschutz", "Datenschutz"],
        ["/unterstuetzen", "Unterstützen"],
      ]}
    />
  </>
);

export default Layout;
