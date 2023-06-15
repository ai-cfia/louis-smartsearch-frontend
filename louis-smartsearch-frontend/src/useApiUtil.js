import { useState, useEffect } from "react";

const useApiUtil = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch("https://louis-demo-gd5sj5te5a-nn.a.run.app/search", {
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

    }, [term])

    
    return { data };

}

export default useApiUtil;