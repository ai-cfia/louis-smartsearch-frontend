import { useState, useEffect } from "react";

export const useApiUtil = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try{        
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/search", {
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

                } else {
                    throw new Error("Request failed");
                }

            } catch(error) {
                console.error("Error: ", error);
            }
        }

        console.log(term);
        fetchData();

    })

    return { data };
}

export const PingBackend = async () => {
    try{
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/search", {
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
        } else {
            throw new Error("Request failed");
        }
        
    } catch(error) {
        console.error("Error: ", error);
    }
}
