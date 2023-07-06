// Function to fetch data from the API
export const PingBackend = async () => {
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