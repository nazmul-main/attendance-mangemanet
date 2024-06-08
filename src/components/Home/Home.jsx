import React from "react";
import Image from "next/image";


const Home = () => {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            {/* <small className="text-gray-400">
              Welcome back! Please enter your details
            </small> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Your Company Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3"><button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button></div>
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
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: "24rem", height: "32rem" }}
        >
          <Image
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://i.imgur.com/9l1A4OS.jpeg"
            alt="Login banner"
            width={384}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
