import React, { useState } from 'react'

import JSONPretty from 'react-json-pretty';
import { JSONTree } from 'react-json-tree';

import '../App.css'

import 'react-json-pretty/themes/monikai.css';
function JsonParser() {
    const [text, setText] = useState('')
    const [output, setOutput] = useState('')

    const [format, setFormat] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const handleToggle = () => {
        setIsChecked(!isChecked);
    };


    const parseJson = () => {
        setFormat(false);
        try {
            const parsed = JSON.parse(text);
            setOutput(JSON.stringify(parsed, null, 2));
        } catch (error) {
            console.error('Error parsing JSON:', error);
            setOutput('Invalid JSON' + "  " + error);
        }
    };



    const formatJson = () => {
        setFormat(true);
        try {
            const parsed = JSON.parse(text);
            setOutput(parsed);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            setOutput('Invalid JSON' + "  " + error);
        }
    };




    return (
        <div className='d-flex  flex-row justify-content-center align-items-center my-5 '>
            <div className='me-5 '>
                <textarea
                    rows="20"
                    cols="80"
                    className=" my-3 w-100 h-100"
                    wrap="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={true}
                    aria-autocomplete="both"
                    role="textbox"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>
            <div className='my-3 d-flex flex-column '>
                

                <button
                    className='btn btn-primary'
                    onClick={parseJson}
                >json parser</button>

                <button
                    className='btn btn-secondary my-2'
                    onClick={formatJson}
                >formatter json</button>
            </div>
            


            <div className='json-output ms-5'>
                {!format ? (
                    <textarea
                        className="w-100 h-100"
                        wrap="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        aria-autocomplete="both"
                        role="textbox"
                        value={output}
                        readOnly
                    ></textarea>
                ) : (
                    <JSONTree data={output} invertTheme={false} />
                )}
            </div>

        </div>
    )
}

export default JsonParser
