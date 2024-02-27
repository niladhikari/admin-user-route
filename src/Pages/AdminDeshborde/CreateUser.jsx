import { useState } from "react";

const CreateUser = () => {
  const [selectedStatus, setSelectedBrand] = useState("");
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const citizen = form.citizen.value;
    const documentNo = form.documentNo.value;
    const currentPassType = form.currentPassType.value;
    const durationMonth = form.durationMonth.value;
    const currentVisaType = form.currentVisaType.value;
    const applicationStatus = selectedStatus;

    const myUsers = {
      name,
      citizen,
      documentNo,
      currentPassType,
      durationMonth,
      currentVisaType,
      applicationStatus,
    };
    console.log(myUsers);
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className=" p-10 md:p-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-5">
          Create A User
        </h2>

        <form onSubmit={handleAddProduct}>
          <div className="md:flex mb-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Citizen</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="citizen"
                  placeholder="Citizen"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Document No </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="documentNo"
                  placeholder="Document No"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">
                  Current Pass Type{" "}
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="currentPassType"
                  placeholder="Current Pass Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold">Duration Month</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="durationMonth"
                  placeholder="Duration Month"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">
                  Current Visa Type
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="currentVisaType"
                  placeholder="Current Visa Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">
                  Application Status
                </span>
              </label>
              <label className="input-group">
                <select
                  className="select select-bordered w-full"
                  value={selectedStatus}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option disabled value="">
                    Select Status
                  </option>
                  <option value="PRINT">PRINT</option>
                  <option value="PAY">PAY</option>
                </select>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Create User"
            className="btn btn-block font-bold bg-blue-200"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
