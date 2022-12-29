import Link from "next/link";

import {FaInstagram,FaYoutube,FaFacebook,FaWhatsapp,FaTwitter} from 'react-icons/fa'
function Footer() {
    const mailtoHref = "mailto:najatt.ismail@gmail.com?subject=SendMail&body=Description";
    const teltoHref = "tel:71043224"
    const wapptoHref = "https://api.whatsapp.com/send?phone=96171043224"

    return ( 
<footer>
    <div className="flex flex-wrap md:flex-nowrap gap-8 py-8 px-6">
        <div className="md:w-1/3">
            <h2 className="font-RobotoSlab mb-6 text-blue-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-blue-500">
            Quick Links
            </h2>
            <ul className='font-Roboto'>
                <li className="mb-4 md:text-xl text-l">
                    <Link href="#" className="hover:text-blue-500">Home</Link>
                </li>
                <li className="mb-4 md:text-xl text-l">
                    <Link href="#" className="hover:text-blue-500">About Us</Link>
                </li>
                <li className="mb-4 md:text-xl text-l">
                    <Link href="#" className="hover:text-blue-500">Our Goals</Link>
                </li>
                <li className="mb-4 md:text-xl text-l">
                    <Link href="#" className="hover:text-blue-500">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className="md:w-1/3">
            <h2 className="font-RobotoSlab mb-6 text-blue-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-blue-500">
            Contact Info
            </h2>
            <ul className='font-Roboto'>
                <li className="mb-4 md:text-xl text-l">
                    <Link href={teltoHref} className="hover:text-blue-500">00000000</Link>
                </li>
                <li className="mb-4 md:text-xl text-l">
                    <Link href={mailtoHref} className="hover:text-blue-500">info@company-name.com</Link>
                </li>
                <li className="mb-4 flex">
                <Link href="#"className='border rounded-full p-3 hover:bg-blue-300'>
                    <FaTwitter fontSize="1.4em" className=""/>
                    <span className="sr-only">Twitter page</span>
                </Link>                
                <Link href="#"className='border rounded-full p-3 hover:bg-blue-300'>
                    <FaYoutube fontSize="1.4em"/>
                    <span className="sr-only">Youtube page</span>
                </Link>
                <Link href="#"className='border rounded-full p-3 hover:bg-blue-300'>
                    <FaFacebook fontSize="1.4em"/>
                    <span className="sr-only">Facebook page</span>
                </Link>     
                <Link href="#"className='border rounded-full p-3 hover:bg-blue-300'>
                    <FaInstagram fontSize="1.4em"/>
                    <span className="sr-only">Instagram page</span>
                </Link>
                <Link href={wapptoHref}className='border rounded-full p-3 hover:bg-blue-300'>
                    <FaWhatsapp fontSize="1.4em"/>
                    <span className="sr-only">Whatsapp page</span>
                </Link>             
               </li>
            </ul>
        </div>   
        <div className="md:w-1/3">
        <h2 className="font-RobotoSlab mb-6 text-blue-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-blue-500">
            Location
            </h2>
            <div id="map" className="mb-4 md:text-3xl text-2xl">
\           </div>
        </div>             
    </div>
    <div dir="ltr"className="font-Roboto py-6 px-4 md:flex md:items-center 
    md:justify-around">
        <div className="md:mx-10">
            © Copyrights 2022. <span className='font-bold'>Comapny Name</span> All Rights Reserved. 
        </div>
        <div className="md:mx-10">
            Powered By&nbsp;<Link href="https://flowbite.com/">DAS360</Link>
        </div>
    </div>
</footer>

    );
  }
  
  export default Footer;

