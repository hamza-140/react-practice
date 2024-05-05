import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1d97883ceff84b78899232608240405&q=${latitude},${longitude}`);
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

    getLocation();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-8 rounded-md shadow-md max-w-md">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {weatherData ? (
              <div>
                <h2 className="text-lg font-semibold text-fuchsia-700 mb-4">Weather for {weatherData.location.name}, {weatherData.location.country}</h2>
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
