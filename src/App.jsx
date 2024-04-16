import { useState } from 'react'
import SearchBar from './components/SearchBar'
//import ImageList from '.components/ImageList'
//import ImageShow from '.components/ImageShow'
import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscando con: ', term)
  }
  
  return (
      <div>
       <h1>APP</h1>
       <SearchBar onSubmit={handleSubmit} />
      </div>
  )
}

export default App
