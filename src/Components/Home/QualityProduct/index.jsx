import leftQuality from "../../../assets/qualiytProduct/qualityProductBg.png";
import quality1 from "../../../assets/qualiytProduct/qualityProduct1.png";
import quality2 from "../../../assets/qualiytProduct/qualityProduct2.png";
import quality3 from "../../../assets/qualiytProduct/qualityProduct3.png";
import quality4 from "../../../assets/qualiytProduct/qualityProduct4.png";

const QualityProduct = () => {
  return (
    <div className="max-w-fit mx-auto py-14 flex flex-row">
      <div className="w-6/12 mb-">
        <img src={leftQuality} alt="" className="h-full w-full -mb-1" />
      </div>
      <div className="w-6/12 h-full">
        <div className="flex flex-row items-center justify-center mt-0.5">
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 bg-[#cfcfcf]">
            {/* card1 */}
            <div className="p-14 bg-[#cfcfcf] rounded-lg shadow-md flex flex-col items-start gap-5">
              <div className="">
                <img src={quality1} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-medium">Quality Product</h1>
              <p className="">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 2 */}
            <div className="p-14 bg-[#f8f8f8] rounded-lg shadow-md flex flex-col items-start gap-5">
              <div className="">
                <img src={quality2} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-medium">Quality Product</h1>
              <p className="">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 3 */}
            <div className="p-14 bg-white rounded-lg shadow-md flex flex-col items-start gap-5">
              <div className="">
                <img src={quality3} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-medium">Quality Product</h1>
              <p className="">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 4 */}
            <div className="p-14 bg-[#cfcfcf] rounded-lg shadow-md flex flex-col items-start gap-5">
              <div className="">
                <img src={quality4} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-medium">Quality Product</h1>
              <p className="">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QualityProduct;