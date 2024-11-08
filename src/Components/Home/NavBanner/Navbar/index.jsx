import { RxHamburgerMenu } from "react-icons/rx";
import navbarLeft from "../../../../assets/navbar-bannar/navbarLeft.png";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* desktop & tab */}
      <div className="md:flex flex-row justify-between items-center px-16 py-4 hidden">
        {/* left img */}
        <div className="">
          <img
            src={navbarLeft}
            alt=""
            className="bg-[#A1B7B3] h-full w-20  rounded-lg"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          {/* middle */}
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li className="hover:underline">
                <a>Home</a>
              </li>
              <li className="hover:underline">
                <a>About Us</a>
              </li>
              <li className="hover:underline">
                <a>Planters</a>
              </li>
              <li className="hover:underline">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          {/* end */}
          <div className="border border-white px-8 py-1 rounded-md hover:bg-[#96A9A8]">
            <a className=" text-white">Call Us</a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden flex flex-row justify-between items-center px-3 py-5">
        {/* hamburger menu */}
        <div className="">
          <RxHamburgerMenu className="h-14 w-14" />
        </div>
        {/* mid */}
        <div className="">
          <img src={navbarLeft} alt="" className="" />
        </div>
        {/* right */}
        <div className="border border-white">
          <a className="px-5 text-white text-xl font-medium">Call Us</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
