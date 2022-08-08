

const getSeason = (lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ?'summer':'winter'

    }else{
        return lat>0 ? 'winter':'summer'
    }


} 



const SeasionDisplay =({lat})=>{
    const season= getSeason(lat,new Date().getMonth())

    return <h1>{season=== 'summer'? "Oh, really hot": "Brr, its fizzy"}</h1>
}
export default SeasionDisplay