import './globals.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings';
import {LangSwitch} from './components/Langswitch/client';
import Navbar from './main-header';
import { Roboto, Cairo } from "@next/font/google";
import Footer from './footer';

const roboto = Roboto({
  weight: "400",
  display: "swap",
  subsets: ['latin']
});
const cairo = Cairo({
  weight: "400",
  display: "swap"
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
function RootLayout({
  children,
  params: {
    lng
  }
}) {    
  return (
      <html lang={lng} dir={dir(lng)}>
      <head>      
      </head>
      <body>
      <LangSwitch lng={lng}/>
        <Navbar lng={lng}/>
        {children}
        <Footer/>
      </body>
      </html>
    );
  }
export default RootLayout
