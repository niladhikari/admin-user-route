import { useState } from "react";

const AllUser = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };
  return (
    <div className="grid">
      <div className="mt-20 relative border-none ">
        <div className="absolute bottom-[27%] md:bottom-[30%] lg:bottom-[40%] w-full px-20">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <div className="flex justify-center">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  name="search"
                  id="default-search"
                  className="block md:w-[40%] lg:w-[30%] p-4 pl-10 text-sm text-gray-900 rounded-l-lg bg-gray-50 border-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search by Name..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white bg-blue-700 font-medium rounded-r-lg px-4 py-2 border-none"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold">
          All User Information
        </h2>
        <div>
          <div>
            <h2 className="text-xl font-semibold">Total Users :</h2>
          </div>
          <div className="overflow-x-auto mt-8 rounded-xl ">
            <table className="table bg-yellow-100">
              <thead>
                <tr className="bg-blue-300 text-black font-bold text-16 m-2">
                  <th>NO</th>
                  <th>Name</th>
                  <th>Citizen</th>
                  <th>Document No</th>
                  <th>Current Pass Type</th>
                  <th>Duration Month</th>
                  <th>Current Visa Type</th>
                  <th>Application Status </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
