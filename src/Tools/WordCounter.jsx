import React, { useState } from 'react'
import '../App.css'

function WordCounter() {

    const [text, setText] = useState("");



    const handleInput = (e) => {
        setText(e.target.value);
    }

    const countWords = (inputText) => {
        const trimmedText = inputText.trim();
        return trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
    };

    const countCharacters = (inputText) => {
        // Remove spaces and count remaining characters
        return inputText.replace(/\s+/g, "").length;
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <div className=" bg-info-subtle fs-2 fw-bold text-center border border-2 border-secondary p-2 rounded w-50  ">
                {`${countWords(text)} words ${countCharacters(text)} characters`}
            </div>
            <div className=' mt-3  custom-textarea my-3 '>
                <textarea
                    onChange={handleInput}
                    placeholder="Type your text here..."
                    rows="10"
                    cols="100"
                    value={text}
                />
            </div>
        </div>
    )
}

export default WordCounter
