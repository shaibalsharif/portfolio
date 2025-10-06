
import Image from "next/image";

const Header = ({ styles }: any) => {
  return (
    <>
      <div className={styles.header} />
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.lab}>Lab</div>
      <Image
        className={styles.logoIcon}
        width={35}
        height={39}
        sizes="100vw"
        alt=""
        src="/Logo.svg"
      />
    </>
  );
};

export default Header;
