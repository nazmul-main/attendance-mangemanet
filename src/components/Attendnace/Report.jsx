import React from "react";
const Report = async () => {
  const res = await fetch("http://localhost:3001/empployeeAttendance");
  const data = await res.json();
  return (
    <div className=" p-4 py-5  relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className=" border bg-[#e9f1ea38]">
        <div className=" p-4">
          <h2 className="mb-2 text-xl font-bold"> Attendance Report</h2>
          <hr className="h-[3px] bg-green-500" />
        </div>
        <div className="p-4 ">
          <form className="grid md:gap-5 grid-cols-2 lg:grid-cols-5 justify-center items-center ">
            {/* Attendance */}
            <div className="mb-4">
              <label
                htmlFor="attendance"
                className="block text-gray-700 font-medium mb-2"
              >
                Attendance
              </label>
              <select
                id="attendance"
                name="attendance"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option className="" value="">
                  All Depertments
                </option>
                <option className="hover:bg-green-600" value="present">
                  UI/XI
                </option>
                <option value="absent">Web Developer</option>
                <option value="on_leave">Digital Marketing</option>
              </select>
            </div>

            {/* Shift */}
            <div className="mb-4">
              <label
                htmlFor="shift"
                className="block text-gray-700 font-medium mb-2"
              >
                Shift
              </label>
              <select
                id="shift"
                name="shift"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Shift</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="night">Night</option>
              </select>
            </div>

            {/* Year */}
            <div className="mb-4">
              <label
                htmlFor="year"
                className="block text-gray-700 font-medium mb-2"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 30 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option
                      key={year}
                      value={year}
                      selected={year === new Date().getFullYear()}
                    >
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Month */}
            <div className="mb-4">
              <label
                htmlFor="month"
                className="block text-gray-700 font-medium mb-2"
              >
                Month
              </label>
              <select
                id="month"
                name="month"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option
                    key={index}
                    value={month.toLowerCase()}
                    selected={index === new Date().getMonth()}
                  >
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mx-auto">
              <button
                type="submit"
                className="bg-green-500 w-full text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-green-400 focus:ring-1  shadow"
              >
                Report
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <h2 className="text-center font-bold mb-2">
        Total Eployee: {data.length}
      </h2> */}
      <table className="w-full border mt-3 bg-[#e9f1ea38] text-sm text-left rtl:text-right text-gray-500 overflow-auto scroll-m-1">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              NO
            </th>
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              In Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((employee, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
              </td>
              <td className="px-6 py-4">{employee.Name}</td>
              <td className="px-6 py-4">{employee.id}</td>
              <td className="px-6 py-4">
                {employee?.intime ? employee?.intime : "9.00"}
              </td>
              <td className="px-6 py-4">{employee.Status}</td>
              <td className="px-6 py-4">{employee.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
