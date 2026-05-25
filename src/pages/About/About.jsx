import Banner from "../../components/Banner/Banner.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import AboutBannerImg from "../../assets/images/banner_About.webp";
import { content } from "./aboutContent.js";

export default function About() {
  return (
    <section>
      <Banner img={AboutBannerImg} className={"bannerWrapperAbout"} />
      {content.map((el) => (
        <Accordion key={el.id} title={el.title} content={el.content} />
      ))}
    </section>
  );
}
