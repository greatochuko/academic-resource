import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSession } from "@/services/authService";

const poppins = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Academic Resource",
  description: "Uniben Academic Resource",
};

export default async function RootLayout({ children }) {
  const { user } = await getSession();

  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Header user={user} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
