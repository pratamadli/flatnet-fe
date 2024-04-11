import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Sponsors } from "./Sponsors";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    {/* <Sponsors /> */}
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
