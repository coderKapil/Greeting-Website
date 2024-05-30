import React, { useState } from 'react'
import sunny from "../images/sunny.png"
import cloud from "../images/cloud.png"
import morning from "../images/morning.png"
import moon from "../images/moon.png"
const Greeting = () => {
    let date = new Date()
    let currentTime = date.toLocaleTimeString()
    const[time,setTime] = useState(currentTime)

    setInterval(() => {
        let date = new Date()
    let currentTime = date.toLocaleTimeString()
        setTime(currentTime)
    }, 1000);

    let hours = date.getHours()
    let msg;
    let image;
    if(hours >=5 && hours < 12){
        msg="Good Morning"
        image = morning
    }
    if(hours >=12 && hours < 18){
        msg="Good Afternoon"
        image = sunny
    }
    if(hours >=18 && hours < 22){
        msg="Good Evening"
        image = cloud
    }
    if(hours > 22){
        msg="Good Night"
        image = moon
    }
    if(hours < 5){
        msg="Good Night"
        image = moon
    }
  return (
    <>
    <div className='container'>
        <h2>Greeting Website</h2>
        <h1>{time}</h1>
        <p>{msg}</p>
        <img src={image} alt='img'/>
    </div>
    </>
  )
}

export default Greeting