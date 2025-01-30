import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './Components/Carousel';

// https://jsonplaceholder.typicode.com/photos?_limit=8
function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);

  const fetchImages = async (imgLimit) => {
    try{
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`);
      const data = await response.json()
      setImages(data);
    } catch (e){
      console.log("Error Fetching Images: ", e );
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(8);
  }, [])

  
  return <>
    <div className='carousel-container'>
      <Carousel 
        images = {images}
        isLoading = {loading}
        // defaultImage = {1}
        // imgPerSlide = {}
        // imageLimit = {}
        // customPrevButton = {}
        // customNextButton = {}
      />
    </div>
  </>;
}

export default App;
