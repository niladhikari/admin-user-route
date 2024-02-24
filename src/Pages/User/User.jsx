import { useState } from "react";

const User = () => {
  const [captchaToken, setCaptchaToken] = useState("");

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with captcha token
    console.log("Captcha Token:", captchaToken);
  };

  return (
    <div>
      <h2 className="text-center text-3xl mt-10 text-blue-800 font-semibold">
        Check Application Status
      </h2>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-40">
            <span className="text-xl font-semibold">PASSPORT NO :</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-xl font-semibold">
              COMPANY REGISTRATIONS NO :
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="mt-3">
            <div
              className="g-recaptcha"
              data-sitekey="YOUR_SITE_KEY"
              data-callback={handleCaptchaChange}
            ></div>
          </div>
          <div className="grid justify-center">
            <button type="submit" className="btn btn-primary test-xl font-bold mt-4">
              Check Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
