
import Footer2 from "@/components/footers/footer2/Footer2";
import Header from "../components/headerNew/Header";
// import Header1 from "@/components/headers/index"
import "./globals.scss";
// import Footer from "@/components/footers/footer/Footer";

export const metadata = {
  title: "Royal Crown",
  description: "Royal Crown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/* <Header1 /> */}
        <Header />
        {children}
        {/* <Footer /> */}
        <Footer2 />
      </body>
    </html>
  );
}
