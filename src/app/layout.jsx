import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAdminSession, getSession } from "@/services/authServices";

const poppins = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Academic Resource",
  description: "Uniben Academic Resource",
};

export default async function RootLayout({ children }) {
  const { user } = await getSession();
  const { user: adminUser } = await getAdminSession();

  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Header user={user} adminUser={adminUser} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
