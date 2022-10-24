/** @jsxImportSource @emotion/react */
import * as styles from './CatsCard.styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';


const CatsCard = ({name, origin, img, description, temperament, lifespan, weight}) => {
    return (
        <Card sx={{ maxWidth: 700 }}>
            <div style={{overflow: 'hidden'}}>
                <CardMedia
                    sx={{
                        transition: "all 0.2s ease",
                        "&:hover": {
                            transform: "scale3d(1.05, 1.05, 1)"
                        }
                    }}
                    component="img"
                    image={img}
                    alt="cat"
                />
            </div>
            <CardContent>
                <div css={styles.text}>
                <p>{name}</p> 
                <p css={styles.country}>{origin}</p> 

                <p> <span>Temperament:</span> {temperament}</p>

                <p> <span>Life Span:</span> {lifespan} years</p> 

                <p> <span>Weight:</span> {weight} Kg</p>

                <p>Description</p> 

                <p>{description}</p> 
            </div>
            </CardContent>
        </Card>
    )
}

export default CatsCard;