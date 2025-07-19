import "@/app/styles/globals.css"; 
import Navbar from "@/app/partials/navbar"; 
import { Roboto } from "next/font/google"; 
 
const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],  
  variable: "--font-roboto", 
}); 

export const metadata = {
  title: "Langit Saji",
  description: "Hidangan Lokal yang Menghadirkan Rasa Rumah Sejati",
};
 
export default function RootLayout({ children }) { 
  return ( 
    <html lang="en" className={roboto.variable}> 
      <body className={`${roboto.className} font-roboto`}> 
        <Navbar /> 
        <div className="mt-[62px]"> 
          {children} 
        </div> 
      </body> 
    </html> 
  ); 
}


