import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../../components/background-carousel/BackgroundImage";
import Naturedefenders from "../../components/naturedefenders/Naturedefenders";
import Projects from "../../components/projects/Projects";
import Latest from "../../components/latest/Latest";
import Theones from "../../components/theones/Theones";
import Footer from "../../components/footer/Footer";










const Home = () => {







        return (
                <main class='bg-[#1A1818] w-screen'>



                        <section>
                                <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
                                        <div> <BackgroundImage /></div>

                                        <figcaption class="absolute bottom-96 mx-24 flex gap-8">

                                                <Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-10 rounded">Get Started</button></Link>


                                                <Link to='/project-creation' style={{ textDecoration: 'none', color: 'white' }}><button class="bg-[#50561F] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-10 rounded">Create Project</button></Link>



                                        </figcaption>

                                </figure>
                        </section>
                        <Naturedefenders />
                        <Projects />
                        <Latest />
                        <Theones />
                        <Footer />


                </main>





        )



}


export default Home;