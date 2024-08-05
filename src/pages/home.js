// pages/index.js
import Layout from "../components/Layout";
import HomeSection from "../components/HomeSection";
import ProductListing from "../components/ProductListing";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import GlobalPresence from "../components/GlobalPresence";
import Testimonials from "../components/Testimonials";

export default function Main() {
  return (
    <Layout>
      <HomeSection />
      <ProductListing />
      <AboutUs />
      <OurServices />
      <GlobalPresence />
      <Testimonials />
    </Layout>
  );
}
