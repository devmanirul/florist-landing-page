const EmailSubmit = () => {
  return (
    <div className="py-14 bg-[#424829]">
      <div className="max-w-6xl mx-auto flex flex-row gap-10 py-20">
        {/* left */}
        <div className="w-6/12">
          <h1 className="font-bold text-3xl text-white">
            Enter your email address for our mailing Promo or other interesting
            things
          </h1>
        </div>
        {/* right */}
        <div className="w-6/12 flex flex-row justify-center items-center gap-5">
          <div className="w-8/12">
            <input
              placeholder="Enter your email"
              type="text"
              className="opacity-30 rounded-md text-black outline-none px-5 py-2 w-full"
            />
          </div>
          <div className="w-4/12">
            <button className="bg-green-900 text-white px-5 py-2 w-full rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailSubmit;
