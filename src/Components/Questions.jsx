import React from 'react'

const Questions = ({data}) => {
    return (
        <div className="main_section">
            {/* Question */}
            <div className="question"> {data.question} </div>
            
            {/* Options */}
            {
                data.options.map((options, index) => {
                    return <div key={index}>
                        <input type="checkbox" id="quiz" name="quiz" value={options} />
                        <label htmlFor="quiz"> {options}</label><br></br>
                    </div>
                })
            }
        </div>
    )
}

export default Questions