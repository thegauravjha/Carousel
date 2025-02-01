import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './Components/Carousel';

// https://jsonplaceholder.typicode.com/photos?_limit=8
function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);

  const fetchImages = async (imgLimit) => {
    try {
      setLoading(true);
      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${imgLimit}`);
      const data = await response.json()
      setImages(data);
    } catch (e) {
      console.log("Error Fetching Images: ", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(8);
  }, [])


  return <>
    <div className='carousel-container'>
      <Carousel
        images={images}
        isLoading={loading}
        defaultImage={0}
        imgPerSlide={2}
        imageLimit={10}
        onImageClick={(image, index) => { console.log("onCLick => ", image, index) }}
        customPrevButton={(handleClick) => (
          <button className="btn prev" style={{background: 'rgba(48, 2, 255, 0.478)'}} onClick={handleClick}>Go Back</button>
        )}
        customNextButton={(handleClick) => (
          <button className="btn next" style={{background: 'rgba(255, 2, 2, 0.3)'}} onClick={handleClick}>Go Next</button>
        )}
      />
    </div>
  </>;
}

export default App;
