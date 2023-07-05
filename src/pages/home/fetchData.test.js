// Import the fetchData function from the component file
import { fetchData } from './Home';

// Create a test case for the fetchData function
test('Testing Response Time', async () => {
    // Mock the response from the API
    // Set the expected response time
    const expectedResponseTime = 5000; // Specify the desired response time in milliseconds
    const url = process.env.REACT_APP_BACKEND_URL;

    expect(url).not.toEqual("");

    if(url != ""){
        
        // Start the timer before calling the fetchData function
        const startTime = Date.now();

        // Call the fetchData function
        await fetchData();

        // Calculate the response time
        const responseTime = Date.now() - startTime;

        // Assert that the response time is within the expected range
        expect(responseTime).toBeLessThanOrEqual(expectedResponseTime);

    }

}, 5000);

