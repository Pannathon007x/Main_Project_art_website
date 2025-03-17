import Navbar from "@/components/Navbar";
import './globals.css';
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Pannathon NextJS',
  description: 'NextJS 15 Tutorial',
  keywords: 'Pannathon Kankumnanta, Thailand',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
