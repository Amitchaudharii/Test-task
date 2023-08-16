import Header from "./components/header/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Test task",
  description: "Created by chaudhary.amit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
