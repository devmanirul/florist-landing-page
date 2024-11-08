import aboutUsData from "../../constant/aboutUs.constant";
import AboutCard from "./AboutCard";

const AboutUs = () => {
  return (
    <div className="px-3 md:px-0 py-5 md:py-14 md:max-w-6xl mx-auto z-0">
      <h1 className="font-bold text-xl md:text-3xl text-center mb-5 md:mb-10">
        What Do They Say About Us
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        {aboutUsData.map((item) => (
          <AboutCard
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            bgIcon={item.bgIcon}
            className=""
          />
        ))}
      </div>
    </div>
  );
};
export default AboutUs;
