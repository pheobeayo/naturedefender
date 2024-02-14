import React from "react";
import be from "../../assets/be.png";
import stand from "../../assets/stand.png";
import give from "../../assets/give.png";
import arrow from "../../assets/arrow.png";





const Theones = () => {


    return (
        <section className='bg-[#1A1818]'>
            <div className="container mx-auto sm:px-[10px] pb-[10px] mt-16">
               <h2 class='text-white text-4xl mx-96 font-bold mt-4'>The ones who have no voice, </h2>
                           <h3 class='text-white text-4xl mx-96 px-8 font-bold'>need you to speak up</h3>
                    <img src={arrow} alt="arrow" class='mx-96 px-48'/>
               

                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                   <img src={stand} alt="stand" />
                    <img src={be} alt="be" />
                   <img src={give} alt="give" />
                </div>
                </div>
            </section>




    )





}


export default Theones;