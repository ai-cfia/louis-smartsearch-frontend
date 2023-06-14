import { SearchBar } from '../../components/SearchBar';
import cfia from "../../assets/CFIA_Banner.png";
import styles from "../home/Home.module.css";
import { SearchResultsList } from '../../components/SearchResultsList';

const Layout = () => {

    return (
        <div className={styles.layout}>
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
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>

            <div className="searchPage_header">
                <div>
                    <text style={{fontWeight: 'bold', fontSize: 50}}>CFIA Smart Search</text>
                </div>
                <div className="searchBar-container-search">
                    <SearchBar/>
                </div>
            </div>
            <SearchResultsList/>

        </div>
    );
};

export default Layout;
