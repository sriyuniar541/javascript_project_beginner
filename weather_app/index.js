
let weather = {
    "apiKey"      :  `cce522cfc7934c24bb2175617231412`,
    fetchWeather  : function (city) {
        fetch( `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=yes`)
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data));
    },

    displayWeather : function(data) {

        const {name}       =  data.location; 
        const {temp_c}     =  data.current; 
        const {humidity}   =  data.current; 
        const {wind_kph}   =  data.current; 
        const {icon}       =  data.current.condition; 
        const {text}       =  data.current.condition; 

        document.querySelector(".city").innerHTML       = name ;                         //weather
        document.querySelector(".temp").innerHTML       = Math.round(temp_c) + '°C';     //temp
        document.querySelector(".humidity").innerHTML   = humidity + '%';                //humidity
        document.querySelector(".wind").innerHTML       = wind_kph + ' km/h';            //wind    
        document.querySelector(".weather-icon").src     = icon;                          //icon
        document.querySelector(".text").innerHTML       = text ;   
        
        console.log(icon);
        
    },

    search : function () {
        const searchBox = document.querySelector(".search input").value;
       

        this.fetchWeather(searchBox);
    }
};

 const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", function () {
    weather.search();
})


document.querySelector(".search input").addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
        weather.search(); 
    }
})
       






