import cfia from "../assets/CFIA_SmartSearch_Logo.png";
import styles from "../pages/home/Home.module.css"
import "../components/SearchResultsList.css";

// Header Component -> Displays CFIA banner image.
const CFIALogo = () => {
    return(
            <div>
                <a href="/" title="ACIA | CFIA">
                            <img src={cfia}
                                alt="CFIA logo"
                                className={styles.githubLogo}
                            />
                </a>            
            </div>
    )
};

export default CFIALogo;

