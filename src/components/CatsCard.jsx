import './CatsCard.css'

const CatsCard = ({name, origin, img, description, temperament, lifespan, weight}) => {
    return (
        <div className="catCardContainer">
            <div className="catimage">
                <img src={img} alt="cat"/>
            </div>
            <div className="text">
                <p>{name}</p> 
                <p className='country'>{origin}</p> 

                <p> <span>Temperament:</span> {temperament}</p>

                <p> <span>Life Span:</span> {lifespan} years</p> 

                <p> <span>Weight:</span> {weight} Kg</p>

                <p>Description</p> 

                <p>{description}</p> 
            </div>
        </div>
    )
}

export default CatsCard;