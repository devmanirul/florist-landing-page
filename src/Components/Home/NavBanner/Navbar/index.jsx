import { RxHamburgerMenu } from "react-icons/rx";
import navbarLeft from "../../../../assets/navbar-bannar/navbarLeft.png";

const Navbar = () => {
  return (
    <div className="">
      {/* desktop & tab */}
      <div className="md:flex flex-row justify-between items-center px-14 py-3 hidden">
        {/* left img */}
        <div className="">
          {/* Left img */}
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Planters</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          {/* end */}
          <div className="border border-white">
            <a className="px-8 text-white">Call Us</a>
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
