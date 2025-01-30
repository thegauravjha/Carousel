import react from "react";

const Carousel = ({
    images = [],
    isLoading = false,
    defaultImage = 0,
    imgPerSlide = 1,
    imageLimit = images?.length,
    customPrevButton,
    customNextButton
}) => {
    console.log('images => ', images)
    return <>
        {
            isLoading ?
                (<div>Loading...</div>) :
                (
                    <div className="carousel">
                        <div className="image-container">
                            {
                                images?.slice(0, imageLimit < images.legth ? imageLimit : images.legth)
                                ?.map((img, index) => {
                                    console.log("img=> ", img)
                                    return (
                                        <img 
                                            key={img?.id} 
                                            src={img?.url} 
                                            alt={img?.title}
                                            className="image"
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
        }
    </>
}

export default Carousel; 