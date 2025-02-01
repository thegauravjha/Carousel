import react, { useEffect, useRef, useState } from "react";
import '../App.css';

const Carousel = ({
    images = [],
    isLoading = false,
    defaultImage = 0,
    imgPerSlide = 1,
    imageLimit = images?.length,
    onImageClick = () => { },
    customPrevButton,
    customNextButton
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const imgRef = useRef(null);

    useEffect(() => {
        setCurrentIndex((defaultImage >= images?.length - 1) ? images.length - 1 : defaultImage);
    }, [images]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => prevIndex == 0 ? images.length - 1 : prevIndex - 1);
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => prevIndex == images.length - 1 ? 0 : prevIndex + 1);
    }

    return <>
        {
            isLoading ?
                (<div>Loading...</div>) :
                (
                    <div className="carousel" style={{ width: imageWidth * imgPerSlide }}>
                        <div
                            className="image-container"
                            style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
                        >
                            {
                                images?.slice(0, imageLimit < images.length ? imageLimit : images.length)
                                    ?.map((img, index) => {
                                        return (
                                            <img
                                                onLoad={() => setImageWidth(imgRef?.current?.offsetWidth)}
                                                ref={index == 0 ? imgRef : null}
                                                key={img?.id}
                                                src={img?.download_url}
                                                onClick={() => onImageClick(img, index)}
                                                alt={img?.author}
                                                className="image"
                                                referrerPolicy="no-referrer"
                                            />
                                        )
                                    })
                            }
                        </div>
                        <div>
                            {
                                customPrevButton instanceof Function ? (
                                    customPrevButton(goToPrev)
                                ) : (
                                    <button className="btn prev" onClick={() => goToPrev()}>Prev</button>
                                )
                            }
                            {
                                customNextButton instanceof Function ? (
                                    customNextButton(goToNext)
                                ) : (
                                    <button className="btn next" onClick={() => goToNext()}>Next</button>
                                )
                            }
                        </div>
                    </div>
                )
        }
    </>
}

export default Carousel; 