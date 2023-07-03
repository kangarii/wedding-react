import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className='container my-48'>
            <div className='flex flex-col w-full items-center justify-center text-primary'>
                <div className='flex flex-col items-center justify-center'>
                    <img
                        src='assets/flower/1.png'
                        alt=''
                        className='w-72 flex absolute bottom-48'
                    />
                    <div className='flex flex-col items-center justify-center border-[4px] border-primary rounded-3xl py-14  px-5'>
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='font-semibold text-2xl'>
                                Undangan Pernikahan
                            </h1>
                            <div className='border-4 border-primary rounded-full my-7'>
                                <div className='mx-1 my-1'>
                                    <img
                                        src='assets/cp.png'
                                        alt='Foto'
                                        className='rounded-full w-80 bg-transparent'
                                    />
                                </div>
                            </div>
                            <h1 className='font-semibold text-7xl drop-shadow-xl text-amber-300 font-estetik'>
                                Aziz & Umi
                            </h1>
                            <p>Kepada Yth Bpk/Ibu/Saudara/i</p>
                            <div id='namatamu'></div>
                            <button
                                className='bg-primary text-secondary px-3 py-3 my-3 rounded-lg drop-shadow-lg font-semibold text-xs'
                                onClick={() => navigate('/lander')}
                            >
                                Buka Undangan
                            </button>
                            <p className='text-center text-xs'>
                                Mohon maaf apabia ada kesalahan dalam penulisan
                                nama/gelar
                            </p>
                        </div>
                    </div>
                    <img
                        src='assets/flower/2.png'
                        alt=''
                        className='w-72 absolute top-28'
                    />
                </div>
            </div>
        </div>
    );
}
