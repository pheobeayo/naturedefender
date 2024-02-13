import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import Checkbox from "../../components/checkbox/Checkbox"
import { createProject } from "../../components/contracts/call";




const ProjectSubmit = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
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
                        <label class="block text-white text-sm font-bold mb-2" for="acceptableCurrrency">
                            Acceptable currency
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="acceptableCurrrency" type="amount" placeholder="NatureDefenders accepts only USDT for the time being" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="walletAddress">
                            Wallet address
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="walletAddress" type="text" placeholder="e.g 0xd914...ABED" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="estimatedAmount">
                            Estimated amount
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="estimatedAmount" type="amount" placeholder="How much is needed to fund the project in USD" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="fundingGoals">
                            Funding goals
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="fundingGoals" type="text" placeholder="Specify the amount of fund needed to complete the project" required></input>
                    </div>

                    <Checkbox
                        id="checkbox"
                        label="Caveat: I agree that 1% of the donation will be allocated to the
                                    NatureDefenders platform from the donated funds"
                        value={checked}
                        onChange={onChange}
                    />

                    <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DA8450] hover:bg-[#1A1818]'
                        onClick={() => createProject()}>Create Project</button>

                </form>

            </section>
        </main>


    );
};

export default ProjectSubmit;