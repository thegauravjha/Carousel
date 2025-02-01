import react, { useEffect, useRef, useState } from "react";
import '../App.css';

const Carousel = ({
    images = [],
    isLoading = false,
    defaultImage = 0,
    imgPerSlide = 1,
    imageLimit = images?.length,
    customPrevButton,
    customNextButton
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const imgRef = useRef(null);

    useEffect(() => {
        setCurrentIndex(defaultImage);
    }, [images]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => prevIndex == 0 ? images.length - 1 : prevIndex - 1);
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => prevIndex == images.length - 1 ? 0 : prevIndex + 1);
    }
    console.log("Images", images);
    console.log("imgRef => ", imgRef?.current?.offsetWidth, imgPerSlide);

    return <>
        {
            isLoading ?
                (<div>Loading...</div>) :
                (
                    <div className="carousel" style={{width: imageWidth * imgPerSlide}}>
                        <div className="image-container" style={{transform: `translateX(-${currentIndex * imageWidth}px)`}}>
                            {
                                images?.slice(0, imageLimit < images.length ? imageLimit : images.length)
                                    ?.map((img, index) => {
                                        return (
                                            <img
                                            onLoad={() => setImageWidth(imgRef?.current?.offsetWidth)}
                                                ref={imgRef}
                                                key={img?.id}
                                                src={img?.download_url}
                                                alt={img?.title}
                                                className="image"
                                                referrerPolicy="no-referrer"
                                            />
                                        )
                                    })
                            }
                        </div>
                        <div>
                            <button className="btn prev" onClick={() => goToPrev()}>Prev</button>
                            <button className="btn next" onClick={() => goToNext()}>Next</button>
                        </div>
                    </div>
                )
        }
    </>
}

export default Carousel; 