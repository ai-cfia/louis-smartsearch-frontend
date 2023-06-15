import { SearchBar } from '../../components/SearchBar';
import cfia from "../../assets/CFIA_Banner.png";
import styles from "../home/Home.module.css";
import { useStateValue } from '../../StateProvider';
import useApiUtil from '../../useApiUtil';
import "../../components/SearchResultsList.css";
import { SearchResult } from '../../components/SearchResult';

const SearchPage = () => {

    const [{term}] = useStateValue();
    const {data} = useApiUtil(term);
    console.log("This is the data 2: " + data);

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

            {data !==null && data.map((item) => (
                 <SearchResult item={item}/>
            ))}
        </div>
    );
};

export default SearchPage;
