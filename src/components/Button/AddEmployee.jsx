"use client";
import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { MdPersonAddAlt1 } from "react-icons/md";

const AddEmployee = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex text-white py-2 px-2 bg-blue-600 rounded-full"
      >
        <MdPersonAddAlt1 className="text-2xl" />
      </button>

      {showModal && (
        <div className=" flex justify-center items-center fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="md:w-1/2 w-11/12  flex flex-col  bg-red-50 md:px-10 px-5 lg:py-10 py-5 rounded-md">
            <form>
              <div className="flex items-center ">
                <h2 className="lg:text-2xl md:text-[22px] text-xl   font-semibold lg:text-center  w-[90%] mb-6">
                  Add Employee
                </h2>
                <button
                  onClick={() => closeModal()}
                  className="text-4xl bg-red-100 rounded-md text-primary font-semibold shadow-xl ml-auto mb-auto "
                >
                  <CiSquareRemove />
                </button>
              </div>

              <div className="flex gap-3 pb-3 ">
                {/* <label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input w-1/2 text-black bg-gray-100 focus:bg-red-100  focus:outline-none  border border-gray-300 rounded-md py-1 px-2 "
                />
                {/* </label> */}
                {/* <label> */}
                <input
                  type="number"
                  name="mobile"
                  placeholder="Contact Number"
                  className="input w-1/2 bg-gray-100 focus:bg-red-100  focus:outline-none border border-gray-300   rounded-md py-1 px-2 "
                />
                {/* </label> */}
              </div>
              <div className="flex gap-3 pb-3 ">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input w-1/2 bg-gray-100 focus:bg-red-100  focus:outline-none border border-gray-300   rounded-md py-1 px-2 "
                  readOnly="true"
                />
                <select
                  id=""
                  name="blood"
                  required
                  className="input w-1/2 bg-gray-100 focus:bg-red-100 border border-gray-300  focus:outline-none  rounded-md py-1 px-2"
                >
                  <option value="blood">Selact Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB</option>
                </select>
              </div>
              <div className="form-control w-full pb-3">
                <label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    className="input w-full bg-gray-100 focus:bg-red-100 border border-gray-300  focus:outline-none  rounded-md py-1 px-2 "
                  />
                </label>
              </div>
              <div className="form-control w-full pb-3"></div>
              <div className="">
                <button className="btn py-3 rounded text-white text-xl btn-block lg:mt-3 bg-primary">
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEmployee;
