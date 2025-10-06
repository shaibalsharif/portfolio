
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const Portfolio: NextPage = () => {
  return (
    <Layout styles={styles}>
      <Image
        className={styles.portfolioIcon}
        width={582.9}
        height={341}
        sizes="100vw"
        alt=""
        src="/Portfolio@2x.png"
      />
      <Image
        className={styles.portfolioPortfolioIcon}
        width={582.9}
        height={341}
        sizes="100vw"
        alt=""
        src="/Portfolio3@2x.png"
      />
      <div className={styles.developedWebhrLanding}>
        Developed web.hr landing page which is utilized in 25,000+ companies.
      </div>
      <div className={styles.webhrLogoVectorized} />
      <Header styles={styles} />
      <Hero styles={styles} />
      <About styles={styles} />
      <WorkExperience styles={styles} />
      <Projects styles={styles} />
      <Skills styles={styles} />
      <Contact styles={styles} />
      <Footer styles={styles} />
    </Layout>
  );
};

export default Portfolio;
