import './App.css';
import CatsCard from './components/CatsCard';
import {useState, useEffect} from 'react'

function App() {
  const [cats, setCats] = useState([])

  async function getCats(){
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const catsApi = await response.json()
    setCats(catsApi)
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
    <div className="header">
      <div className="title">
        <h1>
          30 DAYS OF REACT
        </h1>
        <div className="day"> 
          DAY 20
        </div>
      </div>
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
    </div>
    
    {cats.map(cat => {
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

export default App;
