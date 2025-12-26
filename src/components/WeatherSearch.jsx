import React,{useState} from 'react'
import axios from 'axios';

const key = import.meta.env.VITE_Weather_API_KEY;
const url = import.meta.env.VITE_Weather_API_URL;

const WeatherSearch = ({onWeatherData,onLoading,onError}) => {
    const [city,setCity] = useState('');

    const fetchdata = async (e) =>{
    e.preventDefault();

    if(!city.trim())
    {
        onError('Please enter a city name');
        return;
    }

    onLoading(true);
    onError(null);

   
    try {
      const response = await axios.get(url, {
        params: {
          q: city,
          appid: key,
          units: 'metric'
        }
      });


      const weatherData = {
        city: response.data.name,
        country: response.data.sys.country,
        temperature: Math.round(response.data.main.temp),
        feelsLike: Math.round(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        condition: response.data.weather[0].main
      };

      onWeatherData(weatherData);
      setCity('');
    }
    catch(error)
    {
        if(error.response)
        {
            switch(error.response.status)
            {
            case 400:
                onError('Invalid request. Please enter a valid city name.');
                break;  
            case 401:
                onError('Invalid API key. Please check your API configuration.');
                break;
            case 403:
                onError('Access denied. Your API key does not have permission.');
                break;
            case 404:
                onError('City not found. Please check the city name.');
                break;
            case 500:
                onError('Server Error. Please try again later.');
                break;
            default:
                onError('Failed to fetch weather data..');
            } 
            }   
            else if(error.request)
            {
              onError('Network error. Please check your connection.');
            } 
            else {
            onError('An error occurred. Please try again.');
            }
       
            
           } finally{
           onLoading(false);
        }
    };
   
  const cardBg = 'bg-white/20 backdrop-blur-sm';
  const cardBorder = 'border border-white/30';
  const primaryColor = 'text-sky-100';

  return (
  <form onSubmit={fetchdata} className="mb-8">
  <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
    <input 
      type="text" 
      placeholder='Entry city name..'
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className='flex-1 px-4 py-3 rounded-xl text-lg border-2 border-sky-150 outline-none text-sky-200 transition-all'
    />
    <button
      type='submit'
      className={`px-6 py-3 ${cardBg} ${cardBorder} ${primaryColor} font-semibold rounded-xl hover:from-sky-200 hover:to-indigo-300 transition-all shadow-md hover:shadow-lg`}>
      Search
    </button>
  </div>
</form>
  )
}

export default WeatherSearch
