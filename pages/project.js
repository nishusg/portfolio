import Head from "next/head";
import styles from "../styles/Home.module.css";

const Project = () => {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <h2>Major Project</h2>
        <div>
          <ul className={styles.ul}>
            <li>
              <h3>Colleague - a social media platform</h3>
              <p>
                A platform where user chat virtually with their friend upload
                post and blog.
              </p>
              <a
                href="https://colleaguemain.herokuapp.com/login"
                className={styles.a}
              >
                live
              </a>
            </li>
            <hr />
            <li>
              <h3>Blogging webapp</h3>
              <p>
                A blogging platform where user express their ideas to real world
              </p>
              <a
                href="https://blogwebreact.herokuapp.com/"
                className={styles.a}
              >
                live
              </a>
            </li>
            <hr />
            <li>
              <h3>Simple Movie Database</h3>
              <p>Movie database build using react </p>
              <a href="https://moviedb21.herokuapp.com/" className={styles.a}>
                live
              </a>
            </li>
            <hr />
            <li>
              <h3>Insta Login Page</h3>
              <p>Clone webpage with database connected in backend</p>
              <a href="https://instamade.herokuapp.com/" className={styles.a}>
                live
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Project;
