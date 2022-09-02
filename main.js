// import { AnimatedWeatherIcon } from 'animated-weather-icon';
let long;
let lat;
let temperatureDescription = document.querySelector('.description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');




if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fa9c4d847889cdb89775046520612174&units=metric`;
    fetch(api)
    .then(rres => rres.json())
    .then(data =>{
      console.log(data);
      
      
      
      const {temp_max,} = data.main;  
      const {description,} = data.weather[0];
      
      
      
      
      temperatureDegree.textContent = Math.round(temp_max);
      temperatureDescription.textContent = description;
      locationTimezone.textContent = data.name;
      
      setIcons(icon, document.querySelector(".icon"));
    })
    
  });
  function setIcons(icon,iconID){
    const skycons = new skycons ({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, skycons[currentIcon]);
  }
}


