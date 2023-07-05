import { SearchBar } from '../../components/SearchBar';
import styles from "../home/Home.module.css";
import Header from '../../components/Header';
import CFIALogo from '../../components/CFIALogo';
import { useEffect } from "react";

// Function to fetch data from the API
export const fetchData = async () => {
    try{
        const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                query: ""
            }),
        });

        if(response.ok) {
            console.log("Active Server Connection");
        } else{
            throw new Error("Request failed");
        }
    }catch (error){
        console.error("Error: ", error);
    }
}

const Home = () => {

    useEffect(() => {
        // Check if the REACT_APP_BACKEND_URL is set
        if(process.env.REACT_APP_BACKEND_URL){
            fetchData();
        } else{
            console.error('The REACT_APP_BACKEND_URL environment variable is not set or empty.');
        }
    })

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
