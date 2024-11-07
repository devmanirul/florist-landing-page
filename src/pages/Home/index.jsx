import AboutUs from "../../Components/Home/AboutUs";
import EmailSubmit from "../../Components/Home/EmailSubmit";
import Gallery from "../../Components/Home/Gallary";
import HelpChoose from "../../Components/Home/HelpChoose";
import InterestingBlog from "../../Components/Home/InterestingBlog";
import NavBanner from "../../Components/Home/NavBanner";
import QualityProduct from "../../Components/Home/QualityProduct";
import WeOffer from "../../Components/Home/WeOffer";
import Footer from "../../Components/Shared/Footer";

const Home = () => {
  return (
    <div>
      <NavBanner />
      <HelpChoose />
      <WeOffer />
      <QualityProduct />
      <Gallery />
      <AboutUs />
      <EmailSubmit />
      <InterestingBlog />
      <Footer />
    </div>
  );
};

export default Home;
