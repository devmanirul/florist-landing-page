import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Banner = () => {
  return (
    <div className="h-96 w-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        {/* heading */}
        <h1 className="font-bold text-5xl text-white">
          Nature's Beauty Delivered to You
        </h1>
        {/* description */}
        <p className="text-white w-1/2 text-lg text-center">
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a wide variety of flowers that will bring a touch of
          nature to your home!
        </p>
        <div className="flex flex-row gap-5">
          {/* book now  */}
          <button className="bg-green-950 text-white px-10 py-2 rounded-lg">
            Book Now
          </button>
          {/* watch video */}
          <button className="text-white px-4 py-2 rounded-lg border flex flex-row gap-2 justify-center items-center">
            <MdOutlineSlowMotionVideo className="h-7 w-7" />
            <p className="">Watch Video</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
