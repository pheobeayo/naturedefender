import React from "react";
import arrow from "../../assets/arrow.png";
import tusk from "../../assets/tusk.png";
import horn from "../../assets/horn.png";
import speed from "../../assets/speed.png";
import roar from "../../assets/roar.png";
import bark from "../../assets/bark.png";
import pride from "../../assets/pride.png";
import root from "../../assets/root.png";
import canopy from "../../assets/canopy.png";
import silent from "../../assets/silent.png";
import { Link } from "react-router-dom";








const OngoingProjects = () => {


    return (
      
            
        <section className="bg-[#1A1818] ">
                 <div class='mx-8  text-white text-4xl mb-3 '>
                    <h2>Ongoing Conservation Projects</h2>
                    <img src={arrow} alt="arrow" />
                    </div>

                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                 <Link to='/project-details'><img src={horn} alt="horn" /></Link>
                    <img src={roar} alt="roar" />
                    <img src={tusk} alt="tusk" />
              </div>
              <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                    <img src={pride} alt="pride" />
                    <img src={bark} alt="bark" />
                    <img src={speed} alt="speed" />
             </div>
             <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                    <img src={root} alt="root"/>
                    <img src={silent} alt="silent"/>
                    <img src={canopy} alt="canopy"/>
               </div>
                
                 
          </section>



    )





}


export default OngoingProjects;