import gallary1 from "../../../assets/gallary/gallary1.png";
import gallary2 from "../../../assets/gallary/gallary2.png";
import gallary3 from "../../../assets/gallary/gallary3.png";
import gallary4 from "../../../assets/gallary/gallary4.png";
import gallary5 from "../../../assets/gallary/gallary5.png";

const Gallery = () => {
  return (
    <div className="py-14 max-w-6xl mx-auto">
      <h1 className="font-bold text-3xl text-center mb-10">Our Gallary View</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* 1 */}
        <div className="row-span-6 col-span-3">
          <img src={gallary1} alt="" />
        </div>
        {/* 2 */}
        <div className="row-span-3">
          <img src={gallary2} alt="" />
        </div>
        {/* 3 */}
        <div className="row-span-3 col">
          <img src={gallary3} alt="" />
        </div>
        {/* 4 */}
        <div className="row-span-3">
          <img src={gallary4} alt="" />
        </div>
        {/* 5 */}
        <div className="row-span-3">
          <img src={gallary5} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
