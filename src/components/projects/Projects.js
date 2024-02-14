import React from "react";
import arrow from "../../assets/arrow.png";
import tusk from "../../assets/tusk.png";
import horn from "../../assets/horn.png";
import speed from "../../assets/speed.png";
import roar from "../../assets/roar.png";
import bark from "../../assets/bark.png";
import pride from "../../assets/pride.png";
import { Link } from "react-router-dom";






const Projects = () => {


    return (
        <section className='bg-[#1A1818]'>
            
            <h2 class='text-white text-4xl mx-96 font-bold'>Ongoing Conservation Projects</h2>
                <img src={arrow} alt="arrow" class='mx-96 px-48'/>
            


            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                <Link to='/project-details'><img src={horn} alt="horn" /></Link>
                <img src={roar} alt="roar" />
                <img src={tusk} alt="tusk" />
            </div>

            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                <img src={pride} alt="pride" />
                <img src={bark} alt="bark" />
                <img src={speed} alt="speed" />
            </div>
            <div class='mx-96 px-36 mt-2'>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-40 h-10 rounded">Explore more Projects</button></Link>

            </div>

          

        </section>



    )





}


export default Projects;