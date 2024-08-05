// components/Layout.js
import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />
      <MainNavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
