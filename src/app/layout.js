import "./globals.css";
import Header from "../app/components/header/index";
import Footer from "./components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
