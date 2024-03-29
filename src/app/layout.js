import "./globals.css";
import SmoothScrolling from "@/app/utils/SmoothScrolling";

export const metadata = {
  title: "Simon Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
