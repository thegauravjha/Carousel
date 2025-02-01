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
      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${imgLimit}`);
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
        // defaultImage = {3}
        imgPerSlide = {3}
        imageLimit = {10}
        // customPrevButton = {}
        // customNextButton = {}
      />
    </div>
  </>;
}

export default App;
