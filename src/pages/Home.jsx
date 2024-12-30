import React from 'react'
import { Link } from 'react-router-dom'
import cyyrency from '../assets/currency-converter.jpeg'

function Home() {
    return (

        <div class="container mt-5 grid gap-3 ">
            <div class="row">
                <div class="card " style={{ width: "18rem", marginRight: "20px" }}>
                    <img src={cyyrency} class="card-img-top pt-2" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Currency Converter</h5>
                        <p class="card-text">Convert currencies quickly and easily. Enter an amount, choose currencies, and see the result instantly!</p>
                        <Link class="btn btn-primary" to="/currencyConverter"> currency converter</Link>

                    </div>
                </div>

                <div class="card" style={{ width: "18rem", marginRight: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="row mt-5 ">
                <div class="card  " style={{ width: "18rem", marginRight: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card " style={{ width: "18rem", marginRight: "20px" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src="" class="card-img-top" alt="this is card image " />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>





        </div>

    )
}

export default Home
