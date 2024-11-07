import leftchoose from "../../../assets/help-choose/left-choose.png";
import midchoose from "../../../assets/help-choose/mid-choose.png";
import rightchoose from "../../../assets/help-choose/right-choose.png";

const HelpChoose = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-16 py-20">
      {/* top */}
      <div className="w-full flex flex-row gap-16">
        <h1 className="w-4/12 font-bold text-3xl text-[#285A43]">
          We Help choose the most suitable plants for you
        </h1>
        <p className="w-8/12 text-justify">
          Our selection includes a wide variety of flowers, from classic roses
          to exotic orchids, as well as a variety of lush indoor and outdoor
          plants and also offer unique floral arrangements that are perfect for
          any occasion, whether you're looking to brighten up your home or send
          a thoughtful gift.{" "}
        </p>
      </div>
      {/* bottom */}
      <div className="w-full flex flex-row gap-16">
        {/* left */}
        <div className="w-4/12 flex flex-col gap-3 p-10">
          <div className="">
            <img src={leftchoose} alt="" className="w-20 h-full" />
          </div>{" "}
          <h3 className="text-xl font-bold">Indoor Plants</h3>
          <p className="">
            Bring the beauty of nature to your outdoor spaces with our wide
            selection of outdoor plants
          </p>
        </div>
        {/* middle */}
        <div className="w-4/12 flex flex-col gap-3 bg-[#337A5B] p-10 rounded-md">
          <div className="">
            <img src={midchoose} alt="" className="w-20 h-full" />
          </div>
          <h3 className="text-xl font-bold text-white">Outdoor Plants</h3>
          <p className="text-white">
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </p>
        </div>
        {/* right */}
        <div className="w-4/12 flex flex-col gap-3 p-10">
          <div className="">
            <img src={rightchoose} alt="" className="w-20 h-full" />
          </div>
          <h3 className="text-xl font-bold">Plants</h3>
          <p className="">
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HelpChoose;
