'use client';

import Link from "next/link";

import { useRouter } from "next/navigation";
const LangSwitch = () => {  
  const { locale } = useRouter();

  return (
<div className="absolute right-0 top-0 h-auto z-10 flex justify-center items-center">
    <Link class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4"
      activeClassName={`${locale === "en-US"}`}
      href={`/en-US`}
      locale="en-US"
    >
        EN
    </Link>
    <Link class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4"
      activeClassName={`${locale === "ar-SA"}`}
      href={`/ar-SA`}
      locale="ar-SA"
    >
        AR
    </Link>
</div>
  );
};

export default LangSwitch;