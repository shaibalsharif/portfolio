
import Image from "next/image";

const Projects = ({ styles }) => {
  return (
    <>
      <Image
        className={styles.cardIcon}
        width={669}
        height={165}
        sizes="100vw"
        alt=""
        src="/Card2@2x.png"
      />
      <div className={styles.portfolioText}>
        <div className={styles.aWebAppContainer}>
          <p className={styles.linkedin}>
            A web app for visualizing personalized Spotify data. View your
          </p>
          <p className={styles.linkedin}>
            top artists, top tracks, recently played tracks, and detailed audio
          </p>
          <p className={styles.linkedin}>
            information about each track. Create and save new playlists of
          </p>
          <p className={styles.linkedin}>
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
        <div className={styles.exampleProject}>Example Project</div>
        <div className={styles.featuredProject}>Featured Project</div>
        <Image
          className={styles.iconParkSolidclick}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
        <Image
          className={styles.iconParkSolidclick}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
        <Image
          className={styles.iconParkSolidclick2}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
      </div>
      <div className={styles.portfolioPortfolioText}>
        <Image
          className={styles.portfolioCardIcon}
          width={669}
          height={165}
          sizes="100vw"
          alt=""
          src="/Card@2x.png"
        />
        <div className={styles.portfolioAWebAppContainer}>
          <p className={styles.linkedin}>
            A web app for visualizing personalized Spotify data. View your
          </p>
          <p className={styles.linkedin}>
            top artists, top tracks, recently played tracks, and detailed audio
          </p>
          <p className={styles.linkedin}>
            information about each track. Create and save new playlists of
          </p>
          <p className={styles.linkedin}>
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
        <div className={styles.portfolioExampleProject}>Example Project</div>
        <div className={styles.portfolioFeaturedProject}>Featured Project</div>
        <Image
          className={styles.iconParkSolidclick3}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
        <Image
          className={styles.iconParkSolidclick3}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
        <Image
          className={styles.iconParkSolidclick5}
          width={31}
          height={31}
          sizes="100vw"
          alt=""
          src="/icon-park-solid-click.svg"
        />
      </div>
    </>
  );
};

export default Projects;
