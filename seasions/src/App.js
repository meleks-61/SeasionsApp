import { useState,useEffect } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import SeasionDisplay from "./components/SeasionDisplay";

function App() {
  const [lat, setLat] = useState();
  const [err,setErr] =useState("")


  useEffect(()=>{

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        console.log(position.coords.latitude);
      },
      (error) => setErr("Your Geolocation Denied")
    )

    }, [])
  

 
  return (
    <div className="App">
    {!lat && !err ? "Loading...": ""}
    {!lat && err ? <ErrorMessage err={err}/>: ""}
    {lat && !err ? <SeasionDisplay  lat={lat}/>: ""}

    </div>
  );
}

export default App;
