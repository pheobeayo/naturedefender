import React from "react";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";






const ProjectCreation = () => {

    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/project-submit")
    };


    return (
        <main className="bg-[#1A1818] w-screen">

            
            <section class='w-[90%] md:w-[80%] mx-auto py-10'>
                <form class='mt-40 w-3/4 mx-28'>
                    <h1 className="text-[30px] md:text-[34px] font-bold text-white mx-40">
                    PROJECT CREATION{" "}
                    </h1>
                    <img src={arrow} alt="arrow" class='mx-72' />
                    <p class='text-white mx-32'>This form section is to get details about the project creator</p>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="companyName">
                            Company name
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Add your company’s name and description" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="companyLocation">
                        Company Location
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="companyLocation" type="text" placeholder="Add your company’s location" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="contactInformation">
                            Contact Information
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="contactInformation" type="text" placeholder="Add your contact information, email, phone number and social media links" required></input>
                    </div>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="teamBackground">
                            Team background
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="teamBackground" type="text" placeholder="Brief description of the team background, their qualification and experience" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectTitle">
                        Project Title
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="projectTitle" type="text" placeholder="A catchy and descriptive name for your project" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectDescription">
                        Project Description
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="projectDescription" type="text" placeholder="Detail explanation of your project and other necessary description" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectImpact">
                        Project Impact
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="projectImpact" type="text" placeholder="Explain how you will contribute to the betterment of society" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="preventiveMeasures">
                        Preventive measures
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="preventiveMeasures" type="text" placeholder="The preventive measures you will put in place to secure the animals" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="habitationRestoration">
                        Habitation Restoration
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="habitationRestoration" type="text" placeholder="Provide an explanation of the habitat restoration project" required></input>
                    </div>
                    <div class='mb-1'>
                        <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Add a Picture </label>
                        <input class="block w-full cursor-pointer bg-[#1A1818] border-[#fff] border-solid border-2  text-[#fff] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' required />
                    </div>

                    

                    <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DA8450] hover:bg-[#1A1818]'
                        handleClick={routeToNextPage}>Continue</button>





                </form>

            </section>

            


        </main>

    );
};

export default ProjectCreation;