const User = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-10 text-blue-800 font-semibold">
        Check Application Status
      </h2>
      <div className="mt-10">
        <form>
          <div className="flex items-center justify-center gap-40">
            <span className="text-xl font-semibold">PASSPORT NO :</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-xl font-semibold">COMPANY REGISTRATIONS NO :</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
