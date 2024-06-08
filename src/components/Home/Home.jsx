import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gradient-to-bl from-green-500 to-blue-500  backdrop-blur bg-cover bg-center py-10">
      <div className="flex shadow-md z-40">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white bg-opacity-40 backdrop-blur"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            <Image
              className="w-[200px] bg-center bg-no-repeat bg-cover rounded-r-md mx-auto "
              src="https://i.ibb.co/8Nx15PS/olyenxlogo-removebg-preview.png"
              alt="Login banner"
              width={2000}
              height={2000}
            />
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  User Email
                </label>
                <input
                  type="email"
                  placeholder="jhon@gmail.com"
                  className="block w-full rounded-md border border-gray-300 focus:border-green-300 focus:outline-none focus:ring-1  py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-green-300 focus:outline-none focus:ring-1  py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <Link href="/dashboard">
                  <button className="mb-1.5 block w-full text-center text-black bg-green-500 hover:bg-green-700 px-2 py-1.5 rounded-md">
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
            <div>
              <strong className="text-green-600 text-[12px]">Admin?</strong>
              <br />
              <small className="text-black text-[14px]">
                If you are not user you are not welcome.
              </small>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap content-center justify-center rounded-r-md hidden sm:flex"
          style={{ width: "24rem", height: "32rem" }}
        >
          <Image
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md object-cover"
            src="https://i.ibb.co/T2y1kt0/olenyextemphoto.jpg"
            alt="Login banner"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
