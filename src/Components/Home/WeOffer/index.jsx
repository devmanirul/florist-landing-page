import WeOfferCard from "./WeOfferCard";
import weOfferData from "../../constant/weOffer.constant";

const WeOffer = () => {
  return (
    <div className="md:max-w-7xl mx-auto px-3 md:px-16 py-10 md:py-14">
      {/* heading */}
      <h1 className="font-bold text-xl md:text-3xl text-[#285A43] text-center">
        What We Offer To You
      </h1>
      {/* cards */}
      <div className="grid md:grid-cols-4 gap-5 mt-4 md:mt-10">
        {weOfferData.map((item) => (
          <WeOfferCard key={item.id} img={item.img} />
        ))}
        {/* card1 */}
      </div>
    </div>
  );
};
export default WeOffer;
