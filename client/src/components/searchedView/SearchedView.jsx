import React from 'react'
import Card from '../card/Card'

const SearchedView = ({ setIsSearched, searchedCountries, }) => {
  return (
    <div className="searched">
    <button onClick={() => setIsSearched(false)}>Back</button>
    {searchedCountries?.map((country) => (
      <Card key={country.id} country={country} />
    ))}

    {searchedCountries.length === 0 && "City not found"}
  </div>
  )
}

export default SearchedView