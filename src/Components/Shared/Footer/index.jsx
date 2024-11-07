import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTwitterLogoThin } from "react-icons/pi";
import footerLeft from "../../../assets/footer/footer1.png";
import footerRight from "../../../assets/footer/footer2.png";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="footer footer-center bg-[#285A43] text-base-content md:rounded px-3 md:px-0 py-5 md:py-14 relative z-20">
        {/* top */}
        <div className="text-2xl font-bold text-white">
          Feel free to Contact us
        </div>
        {/* mid */}
        <nav>
          <div className="grid grid-flow-col gap-4 text-white">
            {/* instagram */}
            <a className="w-14">
              <IoLogoInstagram className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
            {/* facebook */}
            <a className="w-14">
              <FiFacebook className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
            {/* twitter */}
            <a className="w-14">
              <PiTwitterLogoThin className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
          </div>
        </nav>
        {/* bottom */}
        <nav className="grid md:grid-flow-col gap-5 md:gap-10 text-white">
          <a className="link link-hover cursor-pointer">Home</a>
          <a className="link link-hover cursor-pointer">About us</a>
          <a className="link link-hover cursor-pointer">Plants</a>
          <a className="link link-hover cursor-pointer">Delivery</a>
          <a className="link link-hover cursor-pointer">Blog</a>
          <a className="link link-hover cursor-pointer">Contact Us</a>
        </nav>
        {/* bg-pic1 */}
        <div className="absolute left-10 -bottom-8 opacity-20">
          <img src={footerLeft} alt="" className="" />
        </div>
        {/* bg-pic2 */}
        <div className="absolute right-10 -bottom-7 opacity-20">
          <img src={footerRight} alt="" className="" />
        </div>
      </footer>
      <aside className="bg-black text-center p-2 text-lg text-white z-30">
        <p>Copyright © 2021 Lush. All rights reserved.</p>
      </aside>
    </div>
  );
};
export default Footer;
