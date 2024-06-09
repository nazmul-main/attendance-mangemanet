"use client";

import olynexLogo from "../../assets/olyenxlogoLogo.png";
import olynexLogo3 from "../../assets/Screenshot_1-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [attendanceOpen, setAttendanceOpen] = useState(false); // State for attendance dropdown

  const Menus = [
    { title: "Dashboard ", route: "/dashboard/about", src: "#" },
    { title: "Attendance  ↓", route: "", hasDropdown: true, subMenus: [
        { title: "Daily", route: "/dashboard/attendance/daily" },
        { title: "Report ", route: "/dashboard/attendance/report" }
      ]
    },
    { title: " Employee", route: "/dashboard/employee" },
    { title: "Schedule", route: "#" },
    { title: "Notice", route: "#" },
    { title: "Employee", route: "#" },
    { title: "Setting", route: "#", gap: true },
    { title: "Logout", route: "/login" },
  ];

  return (
    <div className="h-screen">
      <div
        className={` ${
          open
            ? "w-[270px]  border-green-500 border bg-gradient-to-bl from-green-500 to-blue-500"
            : "w-20 border-green-500 border bg-gradient-to-bl from-green-500 to-blue-500"
        }  bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={olynexLogo}
          alt="fsdg"
          height={2100}
          width={2100}
          className={`absolute cursor-pointer -right-3 top-11 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className=" bg-white py-3 rounded-md  hover:shadow-black shadow-md">
          <Image
            src={open ? olynexLogo : olynexLogo3}
            alt="fsdg"
            height={2100}
            width={2100}
            className={`cursor-pointer duration-500 rounded-full ${
              open && "rotate-[360deg] w-[70%] mx-auto "
            }`} 
          />
        </div>
        {/* Profile */}
        <div className="flex gap-4 items-center my-5">
          <Image src={olynexLogo3} alt="user Image" height={50} width={50}/>
          <h2 className="text-xl text-white font-semibold">Welcome, <br /><span className="text-[12px] bg-white  text-black px-2 py-1 rounded">Admin</span></h2>
        </div><hr />
        
        <ul className="pt-3">
          {Menus.map((Menu, index) => (
            <div key={index}>
              {Menu.hasDropdown ? ( // If it has dropdown, render the dropdown
                <div className="">
                  <li
                    className={`flex  rounded-md px-2 py-1 cursor-pointer hover:bg-white group     text-sm items-center gap-x-4  duration-100
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                    onClick={() => setAttendanceOpen(!attendanceOpen)}
                  >
                    <Image
                      className="w-7"
                      src={olynexLogo3}
                      alt="icon"
                      width={100}
                      height={100}
                    />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-white group-hover:text-black font-semibold`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                  {attendanceOpen && (
                    <ul className="">
                      {Menu.subMenus.map((subMenu, subIndex) => (
                        <Link href={subMenu.route} key={subIndex}>
                          <li  className="flex items-center justify-center gap-2 text-center  cursor-pointer bg-white py-1 my-1  rounded-md ">
                            <span className="w-7" src={olynexLogo3} alt="olynex" height={100} width={100}/>
                            <span>{subMenu.title}</span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={Menu.route} key={index}>
                  <li
                    key={index}
                    className={`flex  rounded-md px-2 py-1 cursor-pointer hover:bg-white group  text-sm items-center gap-x-4  duration-100
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                  >
                    <Image
                      className="w-7"
                      src={olynexLogo3}
                      alt="icon"
                      width={100}
                      height={100}
                    />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-white group-hover:text-black font-semibold`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
