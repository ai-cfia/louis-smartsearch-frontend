import { SearchBar } from '../../components/SearchBar';
import styles from "../home/Home.module.css";
import Header from '../../components/Header';
import CFIALogo from '../../components/CFIALogo';
import { useState, useEffect } from "react";
import { PingBackend } from '../../api/useApiUtil';

const Home = () => {
    const [alertMessage, setAlertMessage] = useState(""); // State variable for the alert message
    const [isError, setIsError] = useState(false); // State to track if the backend URL is missing

    useEffect(() => {
        // Check if the REACT_APP_BACKEND_URL is set
        if(process.env.REACT_APP_BACKEND_URL) {
            PingBackend().catch((error) => {
                console.error("Error: ", error);
                setIsError(true);
                setAlertMessage("Warning: Initializing ping request to backend $REACT_APP_BACKEND_URL failed."); // Set the alert message on error
            });
        } else {
            console.error("Warning: Backend URL is not set, frontend is misconfigured.");
        }

        if(!process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL === "") {
            setIsError(true);
            setAlertMessage("Warning: Backend URL is not set, frontend is misconfigured.")
          }
    }, []);

    return (
        <div className={styles.layout}>
            <Header />
            {isError && (
                <div className={styles.warning}>
                    {alertMessage}
                </div>
            )}
            <div className="logo-container">
                <CFIALogo />
            </div>
            <div className="searchBar-container">
                <SearchBar />
            </div>
            <div style={{ display: 'flex', textAlign: 'center', marginTop: 20, flexDirection: 'column', alignItems: 'center', color: 'grey' }}>
                <text>Empowering agency's users with precision search.</text>
                <text style={{ marginTop: 10 }}>Équiper les utilisateurs de l'agence avec la recherche de précision.</text>
            </div>
        </div>
    );
};

export default Home;
