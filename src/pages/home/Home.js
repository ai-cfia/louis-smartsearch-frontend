import { SearchBar } from '../../components/SearchBar';
import styles from "../home/Home.module.css";
import Header from '../../components/Header';
import CFIALogo from '../../components/CFIALogo';
import { useState, useEffect } from "react";
import { PingBackend } from '../../api/api';

const Home = () => {
    const [alertMessage, setAlertMessage] = useState(""); // State variable for the alert message
    const [isBackendUrlMissing, setIsBackendUrlMissing] = useState(false); // State to track if the backend URL is missing

    useEffect(() => {
        // Check if the REACT_APP_BACKEND_URL is set
        if (process.env.REACT_APP_BACKEND_URL) {
            PingBackend().catch((error) => {
                console.error("Error: ", error);
                setAlertMessage("Request failed"); // Set the alert message on error
            });
        } else {
            console.error('The REACT_APP_BACKEND_URL environment variable is not set or empty.');
        }

        if (!process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL === "") {
            setIsBackendUrlMissing(true);
          }
    });

    return (
        <div className={styles.layout}>
            <Header />
            {isBackendUrlMissing && (
                <div className={styles.warning}>
                    Warning: The backend URL is missing or empty. Please check your environment configuration.
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
            {alertMessage && <div>{alertMessage}</div>} {/* Render the alert message */}
        </div>
    );
};

export default Home;
