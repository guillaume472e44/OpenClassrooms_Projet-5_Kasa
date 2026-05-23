import { Suspense } from "react";
import { getDatas } from "../../services/API/getDatas.js";
import Banner from "../../components/Banner/Banner.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import HomeBannerImg from "../../assets/images/banner_Home.webp";
import Loader from "../../components/Loader/Loader.jsx";

export default function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";

  return (
    <section>
      <Banner img={HomeBannerImg} title={bannerTitle} shadow={true} />
      <Suspense fallback={<Loader />}>
        <Gallery promise={getDatas()} />
      </Suspense>
    </section>
  );
}
