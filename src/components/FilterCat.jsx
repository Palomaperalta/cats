import './FilterCat.css';

function FilterCat({setFilters,filters,originalCats}){

const handleOnChange = (e) =>{
    const userInput = e.target.value
    setFilters(prevState => ({...prevState, name: userInput}))
  }

  const handleSelect = (e) => {
    const optionSelected = e.target.value
    setFilters(prevState => ({...prevState, country: optionSelected}))
  }

  const handleReset = (e) => {
    setFilters({country: "all", name: ""})
  }

  return (
    <div className="divinput">
      <select className="select" onChange={handleSelect} value={filters.country}>
        <option value="all">All</option>
        {originalCats.reduce((acc, cat)=> {
          if(!acc.includes(cat.origin)){
            acc.push(cat.origin)
          }
          return acc
        },[]).map(country => {
          return <option value={country}>{country}</option>
        })}
      </select>
      <input className="input" placeholder="Search for a cat" onChange={handleOnChange} value={filters.name} ></input>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
)}


export default FilterCat;