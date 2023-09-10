import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Toolbar } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ER in Suzume Server",
  description: "すずめサーバーへの鉄道会社",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Box component="main" sx={{ p: 3 }} className="m-0 p-0 min-h-screen">
          <Toolbar />
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
