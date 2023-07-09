import React from 'react';

const Home = () => {
    return (
        <div
            className='container mt-20 mb-32 w-full'
            data-aos='zoom-in-up'
            data-aos-duration='1000'
        >
            <div className='flex flex-col items-center justify-center '>
                <img
                    src='assets/flower/new/1.png'
                    alt=''
                    className='max-w-xs absolute -top-10'
                />

                <div className='flex flex-col items-center justify-center my-14 border-t-[8px] border-b-[8px] py-7 border-primary '>
                    <h1 className=' text-3xl text-primary font-semibold'>
                        THE WEDDING
                    </h1>
                    <div className='border-primary border-[2px] my-7 mx-5 rounded-full'>
                        <img
                            src='assets/cp.png'
                            alt=''
                            className='rounded-full w-80 mx-1 my-1'
                        />
                    </div>
                    <h1 className='font-bold font-estetik1 drop-shadow-lg text-gold font-dancing text-5xl'>
                        Aziz & Ummi
                    </h1>
                    <p className='text-primary font-semibold my-2'>
                        Appreciate For Your Coming
                    </p>
                    <button className='bg-primary text-secondary px-4 py-2 rounded-2xl mb-3 mt-1 text-sm lg:text-base '>
                        <a href='#' target={'_blank'}>
                            SAVE THE DATE
                        </a>
                    </button>
                </div>
                <img
                    src='assets/flower/new/2.png'
                    alt=''
                    className='max-w-xs absolute -bottom-10'
                />
            </div>
        </div>
    );
};

export default Home;
