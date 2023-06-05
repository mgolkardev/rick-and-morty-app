import { Inter } from "next/font/google";
import "themes/globals.css";
import { MainLayout } from "../common/components/layout/main-layout.component";
import { Providers } from "../common/utils/providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-slate-900 text-white">
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
