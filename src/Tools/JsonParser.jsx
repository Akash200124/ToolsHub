import React, { useState } from 'react'

import JSONPretty from 'react-json-pretty';

import '../App.css'

import 'react-json-pretty/themes/monikai.css';
function JsonParser() {
    const [text, setText] = useState('')
    const [output, setOutput] = useState('')
    const [isChecked, setIsChecked] = useState(false);


  
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };


    const parseJson = () => {
        try {
            const parsed = JSON.parse(text);
            setOutput(JSON.stringify(parsed, null, 2));
        } catch (error) {
            console.error('Error parsing JSON:', error);
            setOutput('Invalid JSON' + "  " + error);
        }
    };



    const formatJson = () => {
        try {
            const formatted = text;
            setOutput(formatted);
            console.log("formatted:", formatted)
        } catch (error) {
            console.error('Error formatting JSON:', error);
            setOutput('Error formatting JSON');
        }
    };

    return (
        <div className='d-flex flex-row justify-content-center align-items-center my-5 '>
            <div className='me-5'>
                <textarea
                    rows="10"
                    cols="60"
                    className=" my-3 w-100 h-100"
                    wrap="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-autocomplete="both"
                    role="textbox"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>
            <div className='my-3 d-flex flex-column '>
                <label className="switch my-3">
                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="slider"></span>
                </label>

                <button
                    className='btn btn-primary'
                    onClick={parseJson}
                >json parser</button>
                <button
                    className='btn btn-secondary my-2'
                    onClick={formatJson}
                >formatter json</button>
            </div>
            <div>
                { }
                <textarea
                    rows="10"
                    cols="60"
                    className=" ms-5  w-100 h-100"
                    wrap="off"
                    autoCorrect='off'
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-autocomplete="both"
                    role="textbox"
                    value={output}
                >

                </textarea>
                <JSONPretty id="json-pretty" data={output}></JSONPretty>

            </div>
        </div>
    )
}

export default JsonParser
