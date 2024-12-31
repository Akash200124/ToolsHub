import React from 'react'
import { Link } from 'react-router-dom'
// import cyyrency from '../assets/currency-converter.jpeg'
import cyyrency from '../assets/currecyConverterIcon1.jpg'
import wordCounter from '../assets/wordCounter.jpg'

import '../App.css'

function Home() {
    return (

        <div class="container mt-3 grid gap-3  ">
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

                

                <div class="card" style={{ width: "18rem", margin: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card  " style={{ width: "18rem", margin: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card " style={{ width: "18rem", margin: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem", margin: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="row mt-5 ">



            </div>





        </div>

    )
}

export default Home
