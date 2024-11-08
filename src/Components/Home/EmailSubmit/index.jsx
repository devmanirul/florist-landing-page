const EmailSubmit = () => {
  return (
    <div className="px-3 md:px-0 py-5 md:py-16 bg-cover bg-hero-email">
      <div className="md:max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-5 md:px-0 py-5 md:py-20">
        {/* left */}
        <div className="md:w-6/12">
          <h1 className="font-bold text-xl md:text-3xl text-white">
            Enter your email address for our mailing Promo or other interesting
            things
          </h1>
        </div>
        {/* right */}
        <div className="md:w-6/12 flex flex-row justify-center items-center gap-5">
          <div className="w-8/12">
            <input
              placeholder="Enter your email"
              type="text"
              className="rounded-md bg-[#D9D9D9]/10 text-white outline-none border px-2 md:px-5 py-2 w-full"
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
