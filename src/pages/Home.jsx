import React from 'react'
import { Link } from 'react-router-dom'
// import cyyrency from '../assets/currency-converter.jpeg'
import cyyrency from '../assets/currecyConverterIcon1.jpg'
import wordCounter from '../assets/wordCounter.jpg'
import passwordGenerator from '../assets/password.webp'
import jsonformat from '../assets/jsonformat.png'
import imagetopdf from '../assets/imagetopdf.png'
import qrcode from '../assets/qrcode.webp'
import imagecompression from '../assets/imageCompress.png'
import urlshortner from '../assets/urlShortner.webp'

import '../App.css'

function Home() {
    return (

        <div class="container mt-3 grid gap-3 akash ">
            <div class="row ">

                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/currencyConverter">
                        <div className="card-overlay">
                            <img src={cyyrency} class="card-img-top" alt="this is card image " />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold text-center">Currency Converter</h5>
                        </div>
                    </Link>
                </div>

                {/* // word counter */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/wordCounter">
                        <div className=" pt-3">
                            <img src={wordCounter} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body mt-5">
                            <h5 class="card-title fw-bold text-center">Word Counter</h5>
                        </div>
                    </Link>
                </div>


                {/* //password generator */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/passwordGenerator">
                        <div className=" pt-3">
                            <img src={passwordGenerator} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title fw-bold text-center">Password Generator</h5>
                        </div>
                    </Link>
                </div>

                {/* // json formatter  */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/jsonFormatter">
                        <div className=" pt-3">
                            <img src={jsonformat} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title fw-bold text-center">JSON Formatter</h5>
                        </div>
                    </Link>
                </div>

                {/* image to pdf converter */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/imageToPdfConverter">
                        <div className=" pt-3">
                            <img src={imagetopdf} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title fw-bold text-center">Image to PDF Converter</h5>
                        </div>
                    </Link>
                </div>

                {/* qr code generator */}

                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/qrCodeGenerator">
                        <div className=" pt-3 mt-4">
                            <img src={qrcode} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body mt-3 ">
                            <h5 class="card-title fw-bold text-center mt-5">QR Code Generator</h5>
                        </div>
                    </Link>
                </div>

                {/* image compression  */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="/imageCompression">
                        <div className="mt-3">
                            <img src={imagecompression} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body  ">
                            <h5 class="card-title fw-bold text-center mt-2">Image Compression</h5>
                        </div>
                    </Link>
                </div>
                
                {/* url shortner  */}
                <div class="card custom-card " style={{ width: "18rem", margin: "20px" }}>
                    <Link className='text-decoration-none text-dark ' to="https://shorturl-one-delta.vercel.app/">
                        <div className="mt-3">
                            <img src={urlshortner} class="card-img-top " alt="this is card image " />
                        </div>
                        <div class="card-body  ">
                            <h5 class="card-title fw-bold text-center mt-2">Url Shortner</h5>
                        </div>
                    </Link>
                </div>


            </div>

        </div>

    )
}

export default Home
