import "./globals.css";
import SmoothScrolling from "@/app/utils/SmoothScrolling";
import {Footer} from "@/app/partials/Footer";

export const metadata = {
  title: "Simon",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <SmoothScrolling>
          {children}
            <Footer/>
        </SmoothScrolling>
      </body>
    </html>
  );
}
