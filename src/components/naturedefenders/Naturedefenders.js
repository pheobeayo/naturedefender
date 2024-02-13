import React from 'react';
import arrow from "../../assets/arrow.png";
import star from "../../assets/star.png";






const Naturedefenders = () => {


    return (
        <section>
            <div className='bg-[#1A1818] '>

                <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                    <h2 className="text-white text-4xl pb-[48px] font-bold leading-10 md:mx-96">
                        Why NatureDefenders?
                    </h2>
                    <img src={arrow} alt="arrow" class='mx-96' />

                    <div className='bg-[#1A1818] grid-cols-4 gap-4 md:flex md:flex-row'>
                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-[#110A03] sm:shrink-0 sm:grow sm:basis-0 border-[#110A03]">
                            <img
                                src={star}
                                alt="star"
                                class='w-10 mx-36 mt-2' />
                            <h3 className="font-bold text-white text-lg mx-28">
                                Direct Impact
                            </h3>
                            <p className="font-normal text-justify text-white text-sm mx-8 mb-2">
                                Donating through our platform ensures
                                <br></br>that your contributions directly support
                                <br></br>conservation projects aimed at saving
                                <br></br>endangered animals in Africa,
                                <br></br>maximizing the impact of your donations


                            </p>
                        </div>

                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-[#110A03] sm:shrink-0 sm:grow sm:basis-0 border-[#110A03]">

                            <img
                                src={star}
                                alt="star"
                                class='w-10 mx-36 mt-2'
                            />
                            <h3 className="font-bold text-white text-lg mx-4">
                                Transparency and Accountability
                            </h3>
                            <p className="font-normal text-justify text-white text-sm mx-8 mb-2">
                                Our platform ensures transparency and
                                <br></br>accountability by enabling donors to track
                                <br></br>and verify the utilization of their funds,
                                <br></br>promoting trust and accountability in
                                <br></br>conservation efforts
                            </p>
                        </div>
                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-[#110A03] sm:shrink-0 sm:grow sm:basis-0 border-[#110A03]">
                            <img
                                src={star}
                                alt="star"
                                class='w-10 mx-36 mt-2'
                            />

                            <h3 className="font-bold text-white text-lg mx-4">
                                Efficiency and Cost-effectiveness
                            </h3>
                            <p className="font-normal text-justify text-white text-sm mx-8 mb-2">
                                By leveraging blockchain technology and
                                <br></br>cryptocurrency donations, our platform
                                <br></br>minimizes transaction costs, allowing a
                                <br></br>higher proportion of donated funds to
                                <br></br>benefit wildlife conservation projects.
                            </p>

                        </div>



                    </div>


                </div>
            </div>
        </section>

    )


}


export default Naturedefenders;




