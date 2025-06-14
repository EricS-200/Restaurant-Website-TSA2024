import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StyledFooter from "@/components/StyledFooter";
export const metadata = {
  title: "Craftroots",
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-full font-sans overflow-x-hidden"}>
        <Navbar />
        {children}
        <StyledFooter />
      </body>
    </html>
  );
}
