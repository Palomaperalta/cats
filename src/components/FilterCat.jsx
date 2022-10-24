/** @jsxImportSource @emotion/react */
import * as styles from './FilterCat.styles'
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';



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
      <Select css={styles.select} onChange={handleSelect} value={filters.country}>
        <MenuItem value="all">All</MenuItem>
        {originalCats.reduce((acc, cat)=> {
          if(!acc.includes(cat.origin)){
            acc.push(cat.origin)
          }
          return acc
        },[]).map(country => {
          return <MenuItem value={country}>{country}</MenuItem>
        })}
      </Select>
      <TextField 
        label="Cat Name" 
        placeholder="Search for a cat" 
        onChange={handleOnChange} 
        value={filters.name}>
      </TextField>
      <Button css={styles.reset} size="medium" onClick={handleReset} variant="outlined">Reset</Button>
    </div>
)}


export default FilterCat;