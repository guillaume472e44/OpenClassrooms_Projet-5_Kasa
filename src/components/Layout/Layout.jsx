import { Outlet } from "react-router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

/**
 * Permet de garder affiché Le Header et le Footer sur toutes les pages.
 *
 */

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
