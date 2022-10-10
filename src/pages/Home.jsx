import './Home.css';
import CatsCard from '../components/CatsCard';
import {useState, useEffect, useContext} from 'react';
import { ThemeContext } from './../App';
import MainLayout from './../components/common/MainLayout';
import CatsSummary from './../components/CatsSummary';
import FilterCat from './../components/FilterCat';

function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const [originalCats, setOriginalCats] = useState([])
  const [filters, setFilters] = useState({country: "all", name: ""})
  const [theme] = useContext(ThemeContext);

  async function getCats(){
    setLoading(true)
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const catsApi = await response.json()
    setCats(catsApi)
    setOriginalCats(catsApi)
    setLoading(false)
  }

  useEffect(()=>{
    getCats()
  },[])

  useEffect(()=>{
    const filteredCats = originalCats.filter(cat => {
      if (filters.country === "all") {
        return cat.name.toLowerCase().includes(filters.name.toLowerCase())
      } else {
        return cat.origin === filters.country && cat.name.toLowerCase().includes(filters.name.toLowerCase())
      }
    })
    setCats(filteredCats)
  },[filters, originalCats, setCats])

  
  return (
      <MainLayout>
        <CatsSummary cats={cats}/>
        <div className={`homepage ${theme ? "light" : "dark"}`}>
          <FilterCat 
            setFilters={setFilters}
            filters={filters}
            originalCats={originalCats} 
          />
          
          {loading ? <span>Loading...</span> :
            cats.map(cat => {
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
        </MainLayout>
  );
 
}

export default Home;
