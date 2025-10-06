
const About = ({ styles }) => {
  return (
    <>
      <div className={styles.judgesABookContainer}>
        <p className={styles.linkedin}>Judges a book</p>
        <p className={styles.linkedin}>
          <span>{`by its `}</span>
          <span className={styles.cover}>cover</span>
          <span className={styles.span}>...</span>
        </p>
      </div>
      <div className={styles.aDesignerWho}>A Designer who</div>
      <div className={styles.becauseIfThe}>
        Because if the cover does not impress you what else can?
      </div>
      <div className={styles.aSelfTaughtUiuxContainer}>
        <span className={styles.portfolioASelfTaughtUiuxContainer}>
          <p className={styles.linkedin}>
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now.
          </p>
          <p className={styles.linkedin}>
            I make meaningful and delightful digital products that create an
            equilibrium
          </p>
          <p className={styles.linkedin}>
            between user needs and business goals.
          </p>
        </span>
      </div>
    </>
  );
};

export default About;
