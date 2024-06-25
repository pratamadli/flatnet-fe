import { AppConfig } from "@/utils/AppConfig";
import { Navbar } from "../organisms/Navbar";
import { Hero } from "../organisms/Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Meta } from "../layouts/Meta";

const BaseTemplate = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { BaseTemplate };
