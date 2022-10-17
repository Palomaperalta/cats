/** @jsxImportSource @emotion/react */
import * as styles from './CatsCard.styles'


const CatsCard = ({name, origin, img, description, temperament, lifespan, weight}) => {
    return (
        <div css={styles.cardcatcontainer}>
            <div css={styles.catimage}>
                <img src={img} alt="cat"/>
            </div>
            <div css={styles.text}>
                <p>{name}</p> 
                <p css={styles.country}>{origin}</p> 

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