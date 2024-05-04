import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        // Make API call to fetch weather data using latitude and longitude
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1d97883ceff84b78899232608240405&q=${latitude},${longitude}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    // Function to get user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeatherData(latitude, longitude);
        }, (error) => {
          console.error(error);
          setLoading(false);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    // Call the function to get user's location
    getLocation();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-gray-300 shadow-md rounded-md">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {weatherData ? (
              <div>
                <h2 className="text-lg text-fuchsia-700 font-semibold mb-4">Weather for {weatherData.location.name}, {weatherData.location.country}</h2>
                <p className="text-sm">Temperature: {weatherData.current.temp_c}°C</p>
                <p className="text-sm">Condition: {weatherData.current.condition.text}</p>
              </div>
            ) : (
              <p className="text-center">No weather data available</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
