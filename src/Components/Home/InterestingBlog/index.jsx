import interestingBlogData from "../../constant/interestingBlogData";
import InterestingCard from "./InterestingCard";

const InterestingBlog = () => {
  return (
    <div className="px-3 md:px-0 py-10 md:py-14 md:max-w-6xl mx-auto">
      <h1 className="text-[#285443] font-bold text-xl md:text-3xl text-center mb-5 md:mb-10">
        Interesting Blog To Read
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-14">
        {interestingBlogData.map((item) => (
          <InterestingCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
export default InterestingBlog;
