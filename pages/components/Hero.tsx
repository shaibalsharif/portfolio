
import Image from "next/image";

const Hero = ({ styles }) => {
  return (
    <>
      <div className={styles.imASoftware}>I'm a Software Engineer.</div>
      <div className={styles.portfolioImASoftware}>
        I'm a Software Engineer.
      </div>
      <div className={styles.imASoftware2}>{`I'm a Software Engineer.| `}</div>
      <div className={styles.helloIAmContainer}>
        <span className={styles.portfolioASelfTaughtUiuxContainer}>
          <span>{`Hello! I Am `}</span>
          <span className={styles.cover}>Ibrahim Memon</span>
        </span>
      </div>
      <Image
        className={styles.arrowIcon}
        width={121.1}
        height={117.9}
        sizes="100vw"
        alt=""
        src="/Arrow.svg"
      />
      <div className={styles.designation}>
        <div className={styles.currentlyImAContainer}>
          <span className={styles.portfolioASelfTaughtUiuxContainer}>
            <span
              className={styles.currentlyImA}
            >{`Currently, I'm a Software Engineer at     `}</span>
            <span className={styles.facebook}>Facebook</span>
            <span>,</span>
          </span>
        </div>
        <Image
          className={styles.designationChild}
          width={20}
          height={21}
          sizes="100vw"
          alt=""
          src="/Group-1898@2x.png"
        />
      </div>
      <div className={styles.me}>
        <div className={styles.meChild} />
        <Image
          className={styles.image1Icon}
          width={165}
          height={223}
          sizes="100vw"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
    </>
  );
};

export default Hero;
