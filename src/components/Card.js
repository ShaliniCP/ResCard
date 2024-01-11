import { IMG_URL } from "../utils/constants";
const Card=(props)=>{
    const {resData}=props;
   
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo
    }=resData?.info;
return(
    <div className="card">
        <div>
        <img className="img" src={IMG_URL+cloudinaryImageId} alt='Food image'/>
        </div>
        <div className="details">
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    </div>
)
}

export default Card;