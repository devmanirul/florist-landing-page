/* eslint-disable react/prop-types */

const AboutCard = ({ img, name, description, bgIcon }) => {
  return (
    <div className="flex flex-row border w-full bg-[#f8f8f8] rounded-md relative overflow-hidden">
      <div className="flex flex-col gap-8 px-6 py-16">
        <div className="flex flex-row items-center gap-6">
          <div className="">
            <img src={img} alt="" className="h-12 w-12" />
          </div>
          <h3 className="font-medium text-xl">{name}</h3>
        </div>
        <p className="">{description}</p>
      </div>
      <div className="absolute right-4 -bottom-10 z-10">
        <img src={bgIcon} alt="" className="opacity-15 " />
      </div>
    </div>
  );
};
export default AboutCard;
