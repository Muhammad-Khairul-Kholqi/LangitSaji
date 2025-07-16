import "@/app/styles/globals.css";
import Navbar from "@/app/partials/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex justify-center p-5 bg-black mt-[62px]">
          <div className="w-full max-w-[1200px]">
            {children} 
          </div>
        </div>
      </body>
    </html>
  );
}
