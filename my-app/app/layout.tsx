import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import Provider  from "./provider";
import "./globals.css";

const appFont = DM_Sans ({
    subsets: ['latin']
});

export const metadata: Metadata = {
  title: "uiStudio",
  description: "Generate Free Ui-Ux for mobioe and wesites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className = {appFont.className}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
