import { useState, useEffect } from "react";

const useApiUtil = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        // Function to fetch data from the API
        const fetchData = async () => {
            try{
                const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        query: term
                    }),
                });

                if(response.ok) {
                    const resposeData = await response.json();
                    setData(resposeData);
                    console.log(resposeData);
                    console.log("This is the data: " + data);

                } else{
                    throw new Error("Request failed");
                }
            }catch (error){
                console.error("Error: ", error);
            }
        }
        
        console.log(term);

        // Check if the REACT_APP_BACKEND_URL is set
        if(process.env.REACT_APP_BACKEND_URL){
            fetchData();
        } else{
            console.error('The REACT_APP_BACKEND_URL environment variable is not set or empty.');
        }
    })

    return { data };

}

export default useApiUtil;