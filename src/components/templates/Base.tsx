import { AppConfig } from "@/utils/AppConfig";
import { Meta } from "../layouts";
import { Banner, Footer, Hero, Navbar, VerticalFeatures } from "../organisms";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
    {/* <Navbar />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer /> */}
  </div>
);

export { Base };
