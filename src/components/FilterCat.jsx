/** @jsxImportSource @emotion/react */
import * as styles from './FilterCat.styles'

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
    <div css={styles.divinput}>
      <select  onChange={handleSelect} value={filters.country}>
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
      <input css={styles.input} placeholder="Search for a cat" onChange={handleOnChange} value={filters.name} ></input>
      <button css={styles.reset} onClick={handleReset}>
        Reset
      </button>
    </div>
)}


export default FilterCat;