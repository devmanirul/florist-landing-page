/* eslint-disable react/prop-types */
import { GoHeartFill } from "react-icons/go";

const WeOfferCard = ({ img }) => {
  return (
    <div className="flex flex-col justify-center gap-5 shadow-md rounded-md">
      {/* img */}
      <div className="w-full relative flex flex-row items-center justify-center rounded-md">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover bg-[#f1f1f1]"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full ">
          <GoHeartFill className="h-7 w-7 hover:text-white " />
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-row justify-between items-center px-3 pb-2">
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
  );
};
export default WeOfferCard;
