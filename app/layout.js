import Footer from './footer';
import './globals.css'
import Navbar from './main-header';
import { Roboto, Cairo } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  display: "swap",
  subsets: ['latin']
});
const cairo = Cairo({
  weight: "400",
  display: "swap"
});
function RootLayout({locale,children}) {
    return (
      <html lang="en" className={`${locale==="en" ? `${roboto.className}` : `${cairo.className}`}`}>
      <head>      
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </html>
    );
  }
  export default RootLayout
