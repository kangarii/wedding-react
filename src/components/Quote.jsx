import React from 'react';

function Quote() {
    return (
        <div className='container'>
            <div className='flex flex-col items-center justify-center text-center px-6 mt-4 mb-7'>
                <div className='border-2 border-primary rounded-lg px-4 py-4'>
                    <p
                        className='font-semibold text-primary text-sm lg:text-base'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                        menciptakan pasangan-pasangan untukmu dari jenismu
                        sendiri, agar kamu cenderung dan merasa tenteram
                        kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                        sayang"
                    </p>
                    <h1
                        className='font-semibold text-base lg:text-lg text-third drop-shadow-md py-2'
                        data-aos='fade-up'
                        data-aos-duration='1400'
                    >
                        - Q.S. Ar-Rum 21 -
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Quote;
