function createWeatherApp() {
    const cache = {};

    async function getTemperatureForCity(city) {
        // Check if the temperature is already cached
        if (cache[city]) {
            console.log('Temperature retrieved from cache');
            return cache[city];
        }

        // Make an API call to retrieve the temperature
        const temperature = await fetchTemperatureFromAPI(city);

        // Cache the temperature for future use
        cache[city] = temperature;

        console.log('Temperature retrieved from API');
        return temperature;
    }

    // Simulating an API call to retrieve temperature
    function fetchTemperatureFromAPI(city) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulated temperature value
                const temperature = Math.floor(Math.random() * 100) + 1;
                resolve(temperature);
            }, 2000); // Simulating a delay of 2 seconds
        });
    }

    return {
        getTemperatureForCity
    };
}

// Usage:
const weatherApp = createWeatherApp();
weatherApp.getTemperatureForCity('New York')
    .then(temperature => console.log('Temperature:', temperature));
weatherApp.getTemperatureForCity('New York')
    .then(temperature => console.log('Temperature:', temperature));