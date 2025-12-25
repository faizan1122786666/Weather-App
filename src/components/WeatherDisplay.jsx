import React from 'react'


const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};


function WeatherDisplay( {data} ) {

  const {
    city,
    country,
    temperature,
    feelslike,
    humidity,
    windSpeed,
    description,
    icon,
    condition
  } = data;

  // Background Rainy Colors
  const primaryColor = 'text-sky-50';
  const secondaryColor = 'text-sky-100';
  const cardBg = 'bg-white/20 backdrop-blur-sm';
  const cardBorder = 'border border-white/30';

  return (
    <div className='animate-fadeIn max-w-4xl mx-auto'>
       <div className={`${cardBg} ${cardBorder} rounded-2xl p-6 md:p-8 mb-6 shadow-2xl`}>
        <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          {/* City and Country */}
          <h2 className={`text-3xl md:text-4xl font-bold ${primaryColor} mb-2`}>
            {city},{country}</h2>
        </div>
        {/* Weather Icon */}
        <div>
          <img 
          src={getWeatherIcon(icon)}
           alt={description}
           className='w-20 h-20 md:w-28 md:h-28 drop-shadow-lg'
          />
          {/* Temperature */}
          <div className='ml-4'>
            <div className={`text-5xl md:text-6xl font-bold ${primaryColor}`}>
            {temperature}°C
            </div>
            {/* FeelsLike */}
            <div className={`text-lg mt-4 ${secondaryColor}`}>
            Feels Like{feelslike}°C
            </div>
          </div>
        </div>
       </div>
            
            {/* Conditions and Description */}
            <div className='text-center md:text-right'>
              {/* Description */}
              <div className={`text-2xl  md:text-3xl font-semibold capitalize ${primaryColor} mb-2`}>
                {description}
              </div>
              {/* Condition */}
              <div className={`text-lg ${secondaryColor} mb-4`}>
                {condition}
              </div>
              <div className="inline-block px-4 py-2 bg-white/30 rounded-full">
              <span className={` flex gap-1 text-sm font-medium ${primaryColor}`}>
              🌦️ Rainy City Weather
              </span>
              </div>
            </div>
            </div>


            {/* Weather Stats Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

              {/* Temperature Card */}
             <div className={`${cardBg} ${cardBorder} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
           <div className="flex items-center">
                <div className='mr-4'>
                  {/* Temperature Icon */}
                  <div className='text-3xl'>
                   🌡️
                  </div>
                </div>
                 {/* Temperature Data */}
                <div>
               <div className={`text-sm ${secondaryColor} font-medium`}>Temperature</div>
               <div className={`text-2xl font-bold ${primaryColor}`}>{temperature}°C</div>
             </div>
            </div>
               <div className={`mt-3 text-sm ${secondaryColor}`}>
                Real feel: {feelslike} °C
               </div>
              </div>

              {/* Humidity Card */}
               <div className={`${cardBg} ${cardBorder} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
               <div className='flex item-center'>
                <div className='mr-4'>
                  {/* Temperature Icon */}
                  <div className='text-3xl'>
                   💧
                  </div>
                </div>
                 {/* Temperature Data */}
                <div>
               <div className={`text-sm ${secondaryColor} font-medium`}>Humidity</div>
               <div className={`text-2xl font-bold ${primaryColor}`}>{humidity}%</div>
             </div>
            </div>
              <div className={`mt-3 text-sm ${secondaryColor}`}>
            {humidity > 70 ? 'High moisture level' : humidity > 40 ? 'Moderate moisture' : 'Low moisture'}
              </div>
              </div>

              {/* Wind Speed Card*/}
               <div className={`${cardBg} ${cardBorder} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
               <div className='flex item-center'>
                <div className='mr-4'>
                  {/* Wind Icon */}
                  <div className='text-3xl'>
                   💨
                  </div>
                </div>
                 {/* Wind Data */}
                <div>
               <div className={`text-sm ${secondaryColor} font-medium`}>Wind Speed</div>
               <div className={`text-2xl font-bold ${primaryColor}`}>{windSpeed} m/s </div>
             </div>
            </div>
              <div className={`mt-3 text-sm ${secondaryColor}`}>
              {windSpeed > 5 ? 'Windy Condition' : 'Calm Breeze'}
              </div>
              </div>


              {/* Weather Condition Card */}

               <div className={`${cardBg} ${cardBorder} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
               <div className='flex item-center'>
                <div className='mr-4'>
                  {/* Westher Icon */}
                 <img src = {getWeatherIcon(icon)}
                alt={description}
                className='w-12 h-12' />
                </div>
                 {/* Temperature Data */}
                <div>
               <div className={`text-sm ${secondaryColor} font-medium`}>Condition</div>
               <div className={`text-2xl font-bold ${primaryColor}`}>{description}</div>
             </div>
            </div>
               <div className={`mt-3 text-sm ${secondaryColor}`}>
                Current Weather Status
               </div>
              </div>
            </div>

            {/* Footer
            Updated Time  */}
            <div className={`text-center mt-8 ${secondaryColor} text-sm`}>
               <p>Weather data source from OpenWeatherMap • Last Updated : {new Date().toLocaleTimeString([],{hour:'2-digit', minute : '2-digit'})}</p>
            </div>
      </div>

  );
}

export default WeatherDisplay
