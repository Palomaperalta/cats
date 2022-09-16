import './Home.css';
import CatsCard from '../components/CatsCard';
import {useState, useEffect} from 'react';
import Header from '../components/Header'

function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)

  async function getCats(){
    setLoading(true)
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const catsApi = await response.json()
    setCats(catsApi)
    setLoading(false)
  }

  useEffect(()=>{
    getCats()
  },[])

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
    console.log(averageWeight())
  return (
      <div className="App">
        <Header>
          <div className="cats-paradise">
            <h1>
              Cats Paradise
            </h1>
            <p className="breeds">
              There are {cats.length} cats breeds
            </p>
            <p>
              On average a cat can weight about {Math.floor(averageWeight())} Kg and lives {Math.floor(averageLife())} years.
            </p>
          </div>
        </Header>
      {loading ? <span>Loading...</span> :
        cats.map(cat => {
          console.log(cat)
          return (
            <CatsCard
              origin={cat.origin}
              name={cat.name}
              img={cat.image?.url}
              description={cat.description}
              key={cat.id} 
              temperament={cat.temperament}
              lifespan={cat.life_span}
              weight={cat.weight.metric}
            />
          )
        })} 
      
      </div>
    
  );
 
}

export default Home;
