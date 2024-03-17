import styles from "./styles.module.css";
import reactLogo from "../../assets/reactLogo.svg";
import linkedInLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import mailLogo from "../../assets/mailLogo.svg";

let Contacts = () => {
    return (
        <div className={styles.contactsContainer} id="contact">
            <div className={styles.endQuote}>Learning, adapting, and achieving.</div>
            <form className={styles.ContactFormContainer}>
                <div className={styles.FormItemContainer}>
                    <label htmlFor="name" className={styles.formItem}>
                        Name
                    </label>
                    <input
                        type="text"
                        className={styles.formItemInput}
                        id="name"
                        placeholder="Enter your name"
                        aria-describedby="name"
                    />
                </div>
                <div className={styles.FormItemContainer}>
                    <label htmlFor="email" className={styles.formItem}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        className={styles.formItemInput}
                        id="email"
                        placeholder="Enter your email id"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className={styles.FormItemContainer} >
                    <label className={styles.formItem} htmlFor="message"  >
                        Message
                    </label>
                    <textarea
                        type="textarea"
                        id="message"
                        className={styles.formItemInput}
                        placeholder="Enter your Message"
                        aria-describedby="message"
                    ></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Submit
                </button>
            </form>
            <div className={styles.contactsList}>
                <a href="#" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={linkedInLogo} alt="Linkedin" width="20px" />
                </a>
                <a href="https://github.com/Chandrakant-iitbbs" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={githubLogo} alt="GitHub" width="20px" />
                </a>
                <a href="mailto:chandrakantgupta681@gmail.com" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={mailLogo} alt="Mail me" width="20px" />
                </a>
            </div>
            
            <div className={styles.copyright}>Handcrafted by me ©️ 2024</div>
            <div className={styles.madeWith}>
                <span>Made with </span><img src={reactLogo} alt="react" width="20px" /> <a href="https://react.dev/" target="_blank" rel="noreferrer" color="var(--tc4) !important">React</a></div>
        </div>

    );
}
export default Contacts;