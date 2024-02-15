import React from "react";
import rhinotwo from "../../assets/rhinotwo.png";
import { getDonor } from "../../components/contracts/call";














const Donate = () => {



   


    return (



        <main class='bg-[#1A1818] w-screen'>


            <img src={rhinotwo} alt="rhinotwo" style={{ marginLeft: '4rem', marginTop: '4rem' }} />



            <div class='grid-cols-2 gap-72 md:flex md:flex-row mx-12 mt-2'>
                <div>
                    <h2 class='text-3xl text-white'>Donate</h2>
                    <h3 class='text-xl text-white font-bold'>HornShield</h3>
                    <h4 class='text-lg text-white font-semibold'>Project overview</h4>
                    <p class='text-white'>HornShield is a dedicated initiative aimed at safeguarding
                        <br></br>black rhinos from the threats of poaching and habitat loss.
                        <br></br>The project employs a two-fold approach, focusing on
                        <br></br>implementing robust security measures and supporting
                        <br></br>habitat restoration efforts. By combining these strategies,
                        <br></br>HornShield aims to ensure the long-term survival and well-
                        <br></br>being of black rhino populations.</p>
                </div>
                <div>
                    <div
                        class="mx-3 flex flex-col rounded-lg bg-[#1A1818] sm:shrink-0 sm:grow sm:basis-0 border-white border-2 mt-40">
                        <p class='text-white text-base justify-center'> Estimated Amount<b style={{ marginLeft: '4rem' }}>Amount raised</b>
                            <br />5,000 ETH <b style={{ marginLeft: '8rem' }}> 3,825ETH</b> </p>
                    </div>
                </div>
            </div>
            <h5 class='text-lg text-white mx-96 px-40 font-bold mt-4'>Project Selected</h5>
            <h6 class='text-base text-white mx-12 font-bold'>HornShield</h6>
            <div class='w-1/2 md:mx-72'>
                <form>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="amount">
                            Input Amount
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="amount" type="amount" placeholder="amount in USDT" required></input>
                    </div>

                </form>
            </div>

            <div class='text-white border-white border-2 rounded w-1/2 mx-72 font-bold'>
                <h6>Total</h6>
                <p>Your Contribution</p>


            </div>
            <div class='text-white mx-72 mt-2'>
                <p>Your contribution must be valued at 2USD to be eligible for matching</p>

            </div>
            <div class='mx-96 mt-4' >
                <button type='submit' className='w-3/4 px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DA8450] hover:bg-[#1A1818]'
                    onClick={() => getDonor()}>Create Project</button>

            </div>
        </main>







    )





}


export default Donate;