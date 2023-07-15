import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField';


interface SearchProps{
  searchTerm: string;
  mainSearchFunc: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({searchTerm, mainSearchFunc}) => {

    const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
        mainSearchFunc(e.target.value)
    }

  return (
    <TextField id="standard-basic" label="Standard" variant="standard"
    type="text"
    value={searchTerm}
    onChange={handleSearch}
    placeholder='search todos'
    />
  )
}

export default Search