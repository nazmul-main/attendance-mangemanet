"use client";

import olynexLogo from "../../assets/olyenxlogoLogo.png";
import olynexLogo3 from "../../assets/Screenshot_1-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Dasboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" , href:"/dashboard/about"},
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="">
      <div
        className={` ${
          open ? "w-[220px] border-green-500 border bg-gradient-to-bl from-green-500 to-blue-500"  : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={olynexLogo}
          alt="fsdg"
          height={2100}
          width={2100}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center bg-white py-3 rounded-md  hover:shadow-black shadow-md">
          <Image
            src={open ? olynexLogo : olynexLogo3}
            alt="fsdg"
            height={2100}
            width={2100}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg] w-[70%] mx-auto"
            }`}
          />
          {/* <h1
            className={`text-green-600 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1> */}
        </div>
        <ul className="pt-6">
          
         <li className=""><Link href="/">Home</Link></li>
         <li><Link href="/">Home</Link></li>
         <li><Link href="/">Home</Link></li>
         <li><Link href="/">Home</Link></li>
         <li><Link href="/">Home</Link></li>
         {/* <li><Link>Home</Link></li>
         <li><Link>Home</Link></li> */}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Dasboard;
