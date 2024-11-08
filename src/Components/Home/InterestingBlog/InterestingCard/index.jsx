/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

const InterestingCard = ({ img, title, description }) => {
  return (
    <div className="md:w-4/12 md:h-[540px] flex flex-col justify-center gap-4 md:gap-5">
      {/* img */}
      <div className="w-full">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      {/* heading */}
      <h3 className="text-[#424829] text-xl md:h-[75px]  font-medium">{title}</h3>
      {/* description */}
      <p className="">{description}</p>
      {/* bottom */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <SlCalender />

          <p className="">January 20, 2023</p>
        </div>
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <p className="text-[#424829] font-medium">Read More</p>
          <FaArrowRightLong className="text-[#424829]" />
        </div>
      </div>
    </div>
  );
};
export default InterestingCard;
