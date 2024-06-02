import './App.css';
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import { useEffect, useState, Suspense } from 'react'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState(null)
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
    }, [searchTerm])

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<h1>Loading...</h1>} />
                <Gallery data={data} />
            </Suspense>
        )
    }
}

return (
  <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
  </div>
)
}

export default App;