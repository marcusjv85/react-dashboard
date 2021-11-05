import React, { useRef } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home() {


    const [weather, setWeather] = useState([])
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });

    if ("geolocation" in navigator) {
        console.log("Available");
        
      } else {
        console.log("Not Available");
      }


    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: '30044'},
            headers: {
              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
              'x-rapidapi-key': 'd78d824a74msha8459d72a8c533fp15a11djsnd876654ebbc0'
            }
          };

          axios.request(options)
          .then(function (response) {
              console.log(Object.keys(weather).length)
              console.log('API ran outside interval function to get the weather')
               setWeather(response.data)
          })
          .catch(function (error) {
              console.error(error);
          });

          setInterval(()=>{
            axios.request(options)
            .then(function (response) {
                console.log(Object.keys(weather).length)
                console.log('API ran to get the weather')
                 setWeather(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
          }, 300000)
          
          
    },[])


    // console.log('This is our current data: ', refData.current.location)
    return (
        <>
            {Object.keys(weather).length > 0 ? <div className='homeBody'>
                <div className='weatherDiv'>
                    <div className="weatherBody">
                        <div className="location"><h1>{weather.location.name}</h1></div>
                        <div className="weatherMain">
                            <div className="condition">
                                <h4>{weather.current.condition.text}</h4>
                                <img  src={weather.current.condition.icon} alt="weather_icon" />
                            </div>
                            <div className="info">
                                <p>Current Temperature: {weather.current.temp_f}°F</p>
                                <p>Feels Like: {weather.current.feelslike_f}°F</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ''}
        </>
    )
}
