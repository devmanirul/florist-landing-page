import gallary1 from "../../../assets/gallary/gallary1.png";
import gallary2 from "../../../assets/gallary/gallary2.png";
import gallary3 from "../../../assets/gallary/gallary3.png";
import gallary4 from "../../../assets/gallary/gallary4.png";
import gallary5 from "../../../assets/gallary/gallary5.png";

const Gallery = () => {
  return (
    <div className="px-3 md:px-0 py-7 md:py-14 md:w-[1349px] mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-10">
        Our Gallery View
      </h1>
      <div className="grid md:grid-cols-12 md:grid-rows-12 gap-5 md:px-0">
        {/* 1 */}
        <div className="col-span-12 md:col-span-4 md:row-span-12">
          <img src={gallary1} alt="" className="w-full h-full" />
        </div>
        {/* 2 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallary2} alt="" className="w-full" />
        </div>
        {/* 3 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallary3} alt="" className="w-full" />
        </div>
        {/* 4 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallary4} alt="" className="w-full" />
        </div>
        {/* 5 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallary5} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
