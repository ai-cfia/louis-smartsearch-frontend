import { SearchBar } from '../../components/SearchBar';
import styles from "../home/Home.module.css";
import Header from '../../components/Header';
import CFIALogo from '../../components/CFIALogo';


const Home = () => {

    return (
        <div className={styles.layout}>

            <Header/>

            <div className="logo-container">
                <CFIALogo/>
            </div>
            <div className="searchBar-container">
                <SearchBar/>
            </div>

            <div style={{display: 'flex', textAlign: 'center', marginTop:20, flexDirection: 'column', alignItems:'center', color: 'grey'}}>
                <text>Empowering agency's users with precision search.</text>
                <text style={{marginTop: 10}}>Équiper les utilisateurs de l'agence avec la recherche de précision.</text>
            </div>

        </div>
    );
};

export default Home;
