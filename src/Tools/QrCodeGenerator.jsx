import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';


import '../styles/qrCodeGenerator.scss'

function QrCodeGenerator() {

    const [text, setText] = useState("https://tools-hub-ashen.vercel.app/");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [fgColor, setFgColor] = useState("#000000");
    const [size, setSize] = useState(256);
    const [marginSize, setMarginSize] = useState(1);
    const [imageSize, setImageSize] = useState(50);

    const [imageSrc, setImageSrc] = useState("");

    const [opacity, setOpacity] = useState(1);
    const [submit, setSubmit] = useState(false);



    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result); // Set the image as a base64 data URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleOpacity = (e) => {
        setOpacity(e.target.value / 100);

    }

    return (
        <div className='d-flex flex-row justify-content-center align-items-center my-5'>

            <div className="card p-5 d-flex flex-column mx-5">
                <h2  className='mb-3'>QR Code Generator</h2>
                <h6 htmlFor="">Enter website URL or text here</h6>
                <input
                    type="text"
                    placeholder='Enter website URL or text here...'
                    onChange={(e) => setText(e.target.value)}
                    className='mt-1 mb-3 w-100 p-2'
                />
                 <h6 htmlFor="">Upload your Logo</h6>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    placeholder='Upload Company logo'
                    className="form-control mb-3 mt-1 w-100 border border-secondary "

                />



                {
                    (imageSrc && submit) && (
                        <div className='my-3'>
                            <div className='div-container'>
                            <label htmlFor="volume">Image size : </label>
                                <input type="range"
                                    name="volume"
                                    min="20"
                                    max="100"
                                    onChange={(e) => setImageSize(e.target.value)}
                                />
                               
                            </div>
                            <div className='div-container'>
                                <label htmlFor="background color">Background color : </label>
                                <input id='background color' type="color" onChange={(e) => setBgColor(e.target.value)} />
                            </div>
                            <div className='div-container'>
                                <label htmlFor="foreground color ">Foreground color : </label>
                                <input id='foreground color ' type="color" onChange={(e) => setFgColor(e.target.value)} />
                            </div>
                            <div className='div-container'>
                            <label htmlFor="volume1">Image opacity : </label>
                                <input type="range"
                                    name="volume1"
                                    min="20"
                                    max="100"
                                    value={opacity *100}
                                    onChange={handleOpacity}

                                />
                                
                            </div>

                        </div>
                    )}
                <button className='btn btn-success py-2 ' onClick={() => setSubmit(true)}>Generate</button>

            </div>
            {/* //qr code generator  */}
            {
                submit && (
                    <div className='my-3 '>
                        <QRCodeSVG
                            value={text}
                            bgColor={bgColor}
                            fgColor={fgColor}
                            size={size}
                            marginSize={marginSize}
                            imageSettings={
                                imageSrc
                                    ? {
                                        src: imageSrc, // Use user-uploaded image
                                        height: imageSize,
                                        width: imageSize,
                                        excavate: true,
                                        opacity: opacity,
                                    }
                                    : null
                            }
                        />

                    </div>
                )
            }

        </div>
    )
}

export default QrCodeGenerator
