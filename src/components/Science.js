import React from 'react'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
const { ipcRenderer } = window.require("electron");

export default function Science() {

    const [news, setNews] = useState([])


    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://newsapi.org/v2/top-headlines?category=science&apiKey=0b457f8724ae493c913b981a079cc630',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
              setNews(response.data.articles)
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])
    console.log(news)

    return (
        <div className='newsBody'>

                <h2>Science</h2>
                <hr />
            {
                news.map((v, i)=>{
                    return(
                        <div className='article'>
                        <a href onClick={(e)=>{
                            e.preventDefault()
                            ipcRenderer.send('newsLink', v.url)
                            }}>
                        <img src={v.urlToImage} alt="headline_image" className='headlineImg'/>
                        </a>
                        <p key={i}>{v.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
