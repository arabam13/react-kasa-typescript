import Collapse from "@/components/Collapse.tsx";
import { dataAbout } from "@/utils/dataAboutPage.ts";

const About = () => {

  return (
    <>
      <section className="image-presentation">
        <img loading="lazy" src="/images/landing-image.jpg" className="img-2" />
      </section>
      <div className="main-content-about">
      {dataAbout.map((item, index) => <Collapse key={index} title={Object.keys(item)[0]} content={Object.values(item)[0]} />)}
      </div>
    </>
  );
};

export default About;
