import Footer from './footer';
import './globals.css'
import Navbar from './main-header';

function RootLayout({children}) {
    return (
      <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </html>
    );
  }
  export default RootLayout
