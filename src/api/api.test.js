// Import the PingBackend function from the component file
import { PingBackend } from './useApiUtil';

// Create a test case for the PingBackend function
test('Testing Response Time', async () => {
    // Mock the response from the API
    // Set the expected response time
    const expectedResponseTime = 10000; // Specify the desired response time in milliseconds
    const url = process.env.REACT_APP_BACKEND_URL;

    expect(url).not.toEqual("");

    if(url != "") {
        
        // Start the timer before calling the PingBackend function
        const startTime = Date.now();

        // Call the PingBackend function
        await PingBackend();

        // Calculate the response time
        const responseTime = Date.now() - startTime;

        // Assert that the response time is within the expected range
        expect(responseTime).toBeLessThanOrEqual(expectedResponseTime);

    }

}, 10000);

