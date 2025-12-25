import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const secondaryColor = 'text-sky-100/50';

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setError(null);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  const handleError = (err) => {
    setError(err);
    setWeatherData(null);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden px-4 py-8"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/015/412/592/non_2x/rain-on-city-background-rainy-day-urban-landscape-in-rainy-weather-illustration-in-flat-style-vector.jpg')",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-sky-200 font-extrabold">
          Weather Forecast
        </h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-sky-100">
          Get real-time weather updates for any city
        </p>
      </div>

      {/* Weather Search */}
      <div className="w-full max-w-xl mx-auto mb-8">
        <WeatherSearch
          onWeatherData={handleWeatherData}
          onLoading={handleLoading}
          onError={handleError}
        />
      </div>


      {/* Loading */}

      {loading && (
        <div className="flex flex-col items-center justify-center mt-10"> 
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-sky-100 border-t-sky-200 rounded-full animate-spin"></div>
          <p className="text-sky-200 mt-3 text-lg sm:text-lg">Loading Weather data...</p>
        </div>

      )}

      {/* Error */}
       {error && (
      <div className={`mt-8 ${secondaryColor} p-4 rounded-lg border border-sky-100 max-w-md mx-auto`}>
      <div className="flex items-center gap-3">
      {/* Cross Symbol */}
      <div className="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center ">
      <span className="text-xs text-sky-700 font-bold">✕</span>
      </div>
      {/* Error Message */}
      <p className="text-sky-200 font-medium text-sm sm:text-base">
      {error}
       </p>
       </div>
      </div>
      )}


        {/* Weather Display */}
        {weatherData && !loading && !error &&(
          <WeatherDisplay data={weatherData}/>
        )}


        {/* Initial State */}
        {!weatherData && !loading && !error && (
          <div className="text-center py-12 px-4">
            <p className={`text-xl text-sky-200 `}>
            Enter a city name to get current weather information</p>
          <div className="mt-1 text-sky-100">
          <p>Try searching for : Karachi, Lahore, London, Narowal</p>
          </div>

          </div>
        )}

    </div>

  );
};

export default App;