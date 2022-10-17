/** @jsxImportSource @emotion/react */
import * as styles from './CatsSummary.styles'

function CatsSummary({cats}){
    function averageLife() {
        const catsage = cats.reduce((acc, cat) =>{
        const life = cat.life_span
        const splited = life.split("-")
        return parseInt(splited[0]) + acc 
        }, 0)
        return catsage / cats.length
    }

    function averageWeight(){
        const catsweight = cats.reduce((acc, cat) =>{
        const weight = cat.weight.metric
        const splited = weight.split("-")
        return parseInt(splited[0]) + acc
        }, 0)
        return catsweight / cats.length
    }

    return (
        <div css={styles.catsparadise}>
            <h1>
              Cats Paradise
            </h1>
            <p css={styles.breeds}>
              There are {cats.length} cats breeds
            </p>
            <p>
              On average a cat can weight about {Math.floor(averageWeight())} Kg and lives {Math.floor(averageLife())} years.
            </p>
        </div>
    )
}
export default CatsSummary;