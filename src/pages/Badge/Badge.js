import React from "react";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";









const Badge = () => {


    return (
        <main class='bg-[#1A1818]'>

            <div>
                <h2 class="text-white text-xl">Badge Reward</h2>
                <img src={arrow} alt="arrow" />

            </div>
            <div>
                <h3 class='text-white text-lg'>Celebrating Wildlife Guardians</h3>
                <p class='text-white text-base'>Your generous donations have made a significant impact on wildlife
                    <br></br>conservation, and as a token of our gratitude, we are thrilled to
                    <br></br>present you with exclusive badge rewards. Each badge represents your
                    <br></br>dedication to preserving endangered species, pristine habitats, and the
                    <br></br>wonders of the natural world.
                    <br></br>By wearing your badge with pride, you showcase your commitment to
                    <br></br>safeguarding the delicate balance of life on Earth. Your support has
                    <br></br>enabled us to take vital steps towards protecting our planet's
                    <br></br>biodiversity and securing a brighter future for wildlife.</p>
                <h4 class='text-lg text-white'>Select one of the Badges to claim your reward!</h4>
            </div>

            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">

                <img src={badge1} alt="badge1" />
                <img src={badge2} alt="badge2" />
                <img src={badge3} alt="badge3" />
            </div>

            <div>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-10 rounded">Claim your rewards now</button></Link>

            </div>




        </main>




    )





}


export default Badge;