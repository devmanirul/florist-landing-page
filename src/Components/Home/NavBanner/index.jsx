// import bgNavBanner from "../../assets/navbar-banar/bgNavBanner.png";
import Banner from "./Banner";
import Navbar from "./Navbar";

const NavBanner = () => {
  return (
    <div className="w-[1349px] h-[580px] mx-auto bg-hero-pattern bg-cover">
      <Navbar />
      <Banner />
    </div>
  );
};
export default NavBanner;
