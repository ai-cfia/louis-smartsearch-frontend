import { useState, useEffect } from "react";

const useApiUtil = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

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

        fetchData();

    })

    
    return { data };

}

export default useApiUtil;