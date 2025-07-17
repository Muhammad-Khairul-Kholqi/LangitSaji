import "@/app/styles/globals.css"; 
import Navbar from "@/app/partials/navbar"; 
import { Playfair_Display } from "next/font/google"; 
 
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],  
  variable: "--font-playfair", 
}); 
 
export default function RootLayout({ children }) { 
  return ( 
    <html lang="en" className={playfair.variable}> 
      <body className={`${playfair.className} font-playfair`}> 
        <Navbar /> 
        <div className="mt-[62px]"> 
          {children} 
        </div> 
      </body> 
    </html> 
  ); 
}

import BackgroundImage from "@/app/assets/bg-main-section.jpg";
import MainSection from "@/app/components/section/home/mainSection";


