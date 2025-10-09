import Articles from "@/components/Articles/Articles";
import Banner from "@/components/Banner/Banner";
import Categories from "@/components/categories/Categories";
import FeatureSection from "@/components/featureSection/FeatureSection";
import Hero from "@/components/Hero/Hero";
import NewArrivalsProducts from "@/components/NewArrivalsProducts/NewArrivalsProducts";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import Simply from "@/components/simply/Simply";

export default function Home() {
  // "build": "next build --turbopack",

  return (
    <>
      <div className="container">
        <Hero />
        <Simply />
        <Categories />
        <NewArrivalsProducts />
        <FeatureSection />
      </div>
      <Banner />
      <Articles />
      <NewsLetter />
    </>
  );
}
