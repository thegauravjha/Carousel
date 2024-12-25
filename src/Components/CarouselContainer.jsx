import React, { useState } from 'react'
import Questions from './Questions';

const CarouselContainer = ({ data }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    console.log("data =>=>=>", data, data.length);

    return (
        <>
            <div className='container'>
                <div className="header">
                    <p>Suggested Quiz</p>
                    {
                        data && data.length
                            ? <p>{data.length} Quesions</p>
                            : ""
                    }
                </div>

                <div className='slider'>
                    <Questions data={data[currentQuestion]} />
                </div>
            </div>

            <div className="footer">
                <div className="question_number">
                    {currentQuestion + 1}/{data.length}
                </div>
                <div className="question_move_buttons">
                    <span className="previous"
                        onClick={()=> setCurrentQuestion((prevState) => prevState > 0 ? prevState - 1 : prevState)}
                    >
                        &lt; Previous
                    </span>
                    <span className="next"
                        onClick={() => setCurrentQuestion((prevState) => prevState < data.length -1 ? prevState + 1 : prevState)}>
                        &nbsp; Next &gt;
                    </span>
                </div>
            </div>
        </>
    )
}

export default CarouselContainer