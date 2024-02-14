import React from "react";
import arrow from "../../assets/arrow.png";
import forest from "../../assets/forest.png";
import deforestation from "../../assets/deforestation.png";
import rhino from "../../assets/rhino.png";
import elephant from "../../assets/elephant.png";







const Latest = () => {


    return (
        <section className='bg-[#1A1818]'>
           <div className="container mx-auto sm:px-[40px] pb-[10px] mt-16">
                <h2 className="text-white text-3xl font-bold leading-10 md:mx-96 mt-4">Latest update About earth</h2>
                <img src={arrow} alt="arrow" class='mx-96 px-40' />
                <div className="grid-cols-3 gap-7 md:flex md:flex-row mx-8 mt-2">

                    <img src={forest} alt="forest" />
                    <div>
                        <img src={deforestation} alt="deforestation" />
                        <img src={rhino} alt="rhino" class='mt-2 mb-2' />
                        <img src={elephant} alt="elephant" class='mt-4' />
                    </div>

                    <div>
                        <h4 class='text-white text-lg font-semibold mt-1'>News on deforestation</h4>
                        <p class='text-white text-sm'>Deforestation disrupts the natural process of
                            <br></br>soil erosion prevention by removing the
                            <br></br>protective cover of trees</p>
                        <h4 class='text-white text-lg font-semibold mt-20'>Race to Save the Rhinos</h4>
                        <p class='text-white text-sm'>Black rhinos teeter on the edge of survival due
                            <br></br>to relentless poaching for their valuable horns.
                            <br></br>Conservation efforts strive to curb this
                            <br></br>alarming trend</p>
                        <h4 class='text-white text-lg font-semibold mt-16'>Elephant Extinction Crisis</h4>
                        <p class='text-white text-sm'>African elephants face mounting threats as
                            <br></br>poaching and habitat loss push them towards
                            <br></br>the brink of extinction</p>
                    </div>



                </div>

            </div>
        </section >


    )





}


export default Latest;