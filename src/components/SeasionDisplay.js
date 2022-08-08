 import "./SeasionDisplay.css"

 
 
 const SeasionConfig ={
  summer:{
    text:"Let's hit the  beach",
    iconName:"sun"

  },
  winter:{
    text:"Brr,its chilly",
    iconName:"snowflake"

  }
 }
 
 const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasionDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  // const text = season === "summer" ? "Oh,really hot" : "Brr, its chilly";
  // const icon = season === "summer" ? "sun" :"snowflake";
  const{text,iconName}= SeasionConfig[season]

  // return <h1>{season=== 'summer'? "Oh, really hot": "Brr, its fizzy"}</h1>
  return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
       <i className={`icon-right massive ${iconName} icon`}/>
       </div>
  );
};
export default SeasionDisplay;
