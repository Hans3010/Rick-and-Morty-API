import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch';
import Location from './components/Location'
import ResidentCard from './components/ResidentCard';


function App() {

  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    
    let URL
    if(locationInput){
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else{
      const randomLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    }
    axios
      .get(URL)
      .then((res) => 
      {
        setLocation(res.data)
        setHasError(false)
      })
      .catch((err) =>
      { 
      setHasError(true)
      console.log(err)
      });
  }, [locationInput]);
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setLocationInput(event.target.input.value)
  }

  return (
    <div className="App">
      <div className='bg'>
        <img src="https://images4.alphacoders.com/936/936813.png" alt="" />
        <form onSubmit={handleSubmit}>
        <input id='input' type="text" placeholder='Type a number between 1 and 126'/>
        <button>Search</button>
      </form>
      </div>
      {
      hasError ? 
      <div className='err-container'>
        <ErrorFetch />
      </div>
      :
      <>
      <div className='location-containerr'>
      <Location location = {location} />
      </div>
      <div className="residents-container">
        {
          location?.residents.map(url => (
            <ResidentCard key={url} url={url} />
            ))
          }
      </div>
      </>
    }    
    </div>
  )
}

export default App
