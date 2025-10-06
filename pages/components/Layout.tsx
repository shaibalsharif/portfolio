
import Image from "next/image";

const Layout = ({ children, styles }: any) => {
  return (
    <div className={styles.portfolio}>
      <Image
        className={styles.backgroundIcon}
        width={1990}
        height={4298}
        sizes="100vw"
        alt=""
        src="/Background.svg"
      />
      <div className={styles.gradient} />
      <div className={styles.portfolioGradient} />
      <div className={styles.gradient2} />
      <div className={styles.gradient3} />
      <div className={styles.gradient4} />
      {children}
    </div>
  );
};

export default Layout;
