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
        ["/datenschutzerklaerung", "Datenschutz"],
        ["/unterstuetzen", "Unterstützen"],
      ]}
    />
  </>
);

export default Layout;
