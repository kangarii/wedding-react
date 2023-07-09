import React from 'react';

export default function Example() {
    return (
        <div className='container flex flex-col items-center justify-center mt-5 mb-20'>
            <div
                className='flex flex-col items-center justify-center border-2 border-primary px-4 py-2 rounded-2xl'
                data-aos='fade-up'
                data-aos-duration='500'
            >
                <h1
                    className='font-extrabold font-estetik1 text-4xl text-gold mb-3'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                    Galeri
                </h1>
                <div className='flex flex-col items-center justify-center'>
                    <div
                        className='flex flex-col lg:flex-row items-center justify-center px-2 lg:px-5 pb-4 pt-2 lg:pt-4 mt-2 bg-primary/40 rounded-2xl'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className='flex flex-row items-center justify-center lg:ml-4'>
                            <img
                                src='https://source.unsplash.com/random/250x250/?japan'
                                alt=''
                                className='border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                            <img
                                src='https://source.unsplash.com/random/250x250/?tech'
                                alt=''
                                className='ml-5 my-4 lg:my-0 border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                        </div>
                        <div className='flex flex-row items-center justify-center lg:ml-4'>
                            <img
                                src='https://source.unsplash.com/random/250x250/?cafe'
                                alt=''
                                className='mr-5 lg:mb-0 lg:mr-4 border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                            <img
                                src='https://source.unsplash.com/random/250x250/?fruit'
                                alt=''
                                className='border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                        </div>
                    </div>
                    <div
                        className='flex flex-col lg:flex-row items-center justify-center lg:px-5 pb-4 pt-2 lg:pt-4 mt-2 bg-primary/40 rounded-2xl'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className='flex flex-row items-center justify-center lg:ml-4'>
                            <img
                                src='https://source.unsplash.com/random/250x250/?jdm'
                                alt=''
                                className='border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                            <img
                                src='https://source.unsplash.com/random/250x250/?german'
                                alt=''
                                className='ml-5 my-4 lg:my-0 border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                        </div>
                        <div className='flex flex-row items-center justify-center lg:ml-4'>
                            <img
                                src='https://source.unsplash.com/random/250x250/?osaka'
                                alt=''
                                className='mr-5 lg:mb-0 lg:mr-4 border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                            <img
                                src='https://source.unsplash.com/random/250x250/?china'
                                alt=''
                                className='border-[2px] rounded-xl w-40 lg:w-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
