import cfia from "../assets/CFIA_Banner.png";
import styles from "../pages/home/Home.module.css"
import "../components/SearchResultsList.css";

// Header Component -> Displays CFIA banner image.
const Header = () => {
    return(
        <header className={styles.header} role={"banner"}>
            <div className={styles.headerContainer}>

                <nav>
                    <ul className={styles.headerNavList}>
                        <li className={styles.headerNavLeftMargin}>
                            <a href="https://inspection.canada.ca/" title="ACIA | CFIA">
                                <img
                                    src={cfia}
                                    alt="CFIA logo"
                                    aria-label="Link to CFIA | Lien à l'ACIA"
                                    style={{height: 50}}
                                />
                            </a>
                        </li>
                        <li className={styles.headerRightText}>Alpha Version</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;

