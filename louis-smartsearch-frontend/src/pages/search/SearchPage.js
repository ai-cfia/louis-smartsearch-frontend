import { SearchBar } from '../../components/SearchBar';
import styles from "../home/Home.module.css";
import { useStateValue } from '../../StateProvider';
import useApiUtil from '../../useApiUtil';
import "../../components/SearchResultsList.css";
import { SearchResultList } from '../../components/SearchResultsList';
import Header from '../../components/Header';
import CFIALogo from '../../components/CFIALogo';

// Search Page Component -> Presents the user search results.
const SearchPage = () => {

    const [{term}] = useStateValue(); // Assigns the variable 'term' to the search string submitted by the user.
    const {data} = useApiUtil(term); // Populates 'data' with the returned JSON objects passed in from the back-end server.

    return (
        <div className={styles.layout}>

            <Header/>

            <div className="searchPage_header">

            <CFIALogo/>

                <div className="searchBar-container-search">
                    <SearchBar term={term}/>
                </div>
            </div>

            <SearchResultList data={data} term={term}/>

        </div>
    );
};

export default SearchPage;
