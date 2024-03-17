import styles from "./styles.module.css";
import devImage from "../../assets/intro_img1.png"
import Intrests from "./intrests";

let Intro = () => {
    return (
        <div className={styles.introContainer} id="intro">
            <div className={styles.introContainer1}>
                <div className={styles.introduction}>
                    <div className={styles.greetings}>
                        <span className={styles.greetings1}>Hii there!</span><br />
                        <span className={styles.greetings2}>I'm </span>
                        <span className={styles.greetings1}>Chandrakant Gupta</span>
                    </div><br />
                    <div className={styles.domainInfo}>
                        <div className={styles.domainTxt}>I am into </div>
                        <Intrests />
                    </div>
                </div>
                <div className={styles.devIllustration}><img src={devImage} alt="Dev" width="100%" /></div>
            </div>
            <div className={styles.introDescription}>

                <p>
                I'm working on MERN stack development. I'm a
                passionate full stack Developer who loves building and understanding
                both front-end & backend architectures. I am also into Competitive
                Programming which helps me to improve my problem-solving and
                logic-building capabilities.
                I belong to Madhya Pradesh state which also called Heart of India
                because it occupies a central place in the country.
                My communicative languages are Hindi & English.
                I'm always interested in
                new projects and collaborations. Feel free to reach out to me. I'm
                looking forward to working with a team highly motivated towards making
                this world a better place to live.
                </p>
            </div>
        </div>
    );
}

export default Intro;