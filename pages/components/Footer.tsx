
import Image from "next/image";

const Footer = ({ styles }) => {
  return (
    <>
      <div className={styles.linkedinBehanceContainer}>
        <p className={styles.linkedin}>LinkedIn</p>
        <p className={styles.linkedin}>{`>>`}</p>
        <p className={styles.linkedin}>Behance</p>
        <p className={styles.linkedin}>{`>>`}</p>
        <p className={styles.linkedin}>Dribbble</p>
        <p className={styles.linkedin}>{`>>`}</p>
        <p className={styles.linkedin}>Instagram</p>
        <p className={styles.linkedin}>{`>>`}</p>
        <p className={styles.linkedin}>logo</p>
      </div>
      <Image
        className={styles.socialIcons}
        width={110}
        height={18.3}
        sizes="100vw"
        alt=""
        src="/Social-Icons.svg"
      />
    </>
  );
};

export default Footer;
