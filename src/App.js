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

  return (
    <div className="App">
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
