import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import cactus1 from "../../../assets/we-offer/cactus1.png";
import cactus2 from "../../../assets/we-offer/cactus2.png";
import cactus3 from "../../../assets/we-offer/cactus3.png";
import cactus4 from "../../../assets/we-offer/cactus4.png";
import cactus5 from "../../../assets/we-offer/cactus5.png";
import cactus6 from "../../../assets/we-offer/cactus6.png";
import cactus7 from "../../../assets/we-offer/cactus7.png";
import cactus8 from "../../../assets/we-offer/cactus8.png";
import { GoHeartFill } from "react-icons/go";

const WeOffer = () => {
  return (
    <div className="md:max-w-7xl mx-auto px-3 md:px-16 py-5 md:py-14">
      {/* heading */}
      <h1 className="font-bold text-3xl text-[#285A43] text-center">
        What We Offer To You
      </h1>
      {/* cards */}
      <div className="grid md:grid-cols-4 gap-5 mt-10">
        {/* card1 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus1}
              alt=""
              className="w-full h-full object-cover bg-[#f1f1f1]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full ">
              <GoHeartFill className="h-7 w-7 hover:text-white " />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus2}
              alt=""
              className="w-full h-full object-cover bg-[#e1e1e1]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus3}
              alt=""
              className="w-full h-full object-cover bg-[#e0e0e0]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus4}
              alt=""
              className="w-full h-full object-cover bg-[#e6e6e6]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus5}
              alt=""
              className="w-full h-full object-cover bg-[#d8d9d8]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus6}
              alt=""
              className="w-full h-full object-cover bg-[#e5e6e8]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 7 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus7}
              alt=""
              className="w-full h-full object-cover bg-[#d8dbda]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* card 8 */}
        <div className="flex flex-col justify-center gap-5 shadow-md rounded-md p-3">
          {/* img */}
          <div className="w-full relative flex flex-row items-center justify-center rounded-md">
            <img
              src={cactus8}
              alt=""
              className="w-full h-full object-cover bg-[#dfdfe1]"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full   ">
              <IoIosHeartEmpty className="h-7 w-7" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <h3 className="font-bold text-lg text-[#285A43]">Cactus Plant</h3>
              <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
                <p className="line-through">($10)</p>
                <span className="text-[#285A43] text-xl font-bold">$8</span>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              {" "}
              <button className="hover:bg-green-800 hover:text-white rounded-md border px-6 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeOffer;
