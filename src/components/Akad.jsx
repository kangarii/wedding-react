import React from 'react';
import { useEffect, useState } from 'react';

export default function Akad() {
    const [time, setTime] = useState({
        getDay: '0',
        getHour: '0',
        getMinute: '0',
        getSecond: '0',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date('June 31, 2024 00:00:00').getTime();

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const now = new Date().getTime();
            const gap = targetDate - now;
            const days = Math.floor(gap / day);
            const hours = Math.floor((gap % day) / hour);
            const minutes = Math.floor((gap % hour) / minute);
            const seconds = Math.floor((gap % minute) / second);

            if (gap < 0) {
                clearInterval(interval);
            } else {
                setTime({
                    getDay: days,
                    getHour: hours,
                    getMinute: minutes,
                    getSecond: seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='container'>
            <div className='flex flex-col w-full items-center justify-center text-center mb-20'>
                <h1 className='font-semibold text-lg lg:text-2xl text-primary'>
                    WAKTU MENUJU ACARA
                </h1>
                <div className='flex flex-row border-2 border-primary px-5 py-3 rounded-3xl'>
                    <p className='mx-2 font-semibold text-primary text-base lg:text-lg'>
                        {time.getDay}
                        <span className='pl-1'>Hari</span>
                    </p>
                    <p className='mx-2 font-semibold text-primary text-base lg:text-lg'>
                        {time.getHour}
                        <span className='pl-1'>Jam</span>
                    </p>
                    <p className='mx-2 font-semibold text-primary text-base lg:text-lg'>
                        {time.getMinute}
                        <span className='pl-1'>Menit</span>
                    </p>
                    <p className='mx-2 font-semibold text-primary text-base lg:text-lg'>
                        {time.getSecond}
                        <span className='pl-1'>Detik</span>
                    </p>
                </div>
                <p className='font-semibold text-sm lg:text-base text-primary mt-3 mx-5'>
                    Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
                    insyaAllah kami akan menyelenggarakan acara :
                </p>
                <div className='flex flex-col lg:flex-row items-center justify-center my-7'>
                    <div className='flex flex-col items-center justify-center mx-3 mt-3 lg:border-r-2 lg:border-l-2 lg:border-primary px-3'>
                        <h1 className='font-semibold text-xl text-third'>
                            Akad Nikah
                        </h1>
                        <p className='font-semibold text-primary'>
                            Pukul 09 : 00 - 10 : 00 WIB
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 mt-3 lg:border-l-2 lg:border-r-2 lg:border-primary px-3'>
                        <h1 className='font-semibold text-xl text-third'>
                            Resepsi
                        </h1>
                        <p className='font-semibold text-primary'>
                            Pukul 10 : 00 WIB - Selesai
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center mt-5 py-3 px-3 border-4 rounded-lg border-primary'>
                    <div
                        className=''
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.031089583044!2d106.14551453595072!3d-6.129655378516627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418acc63d89d35%3A0x32a28de61ce8f9f!2sTaman%20Graha%20Asri!5e0!3m2!1sid!2sid!4v1688311607439!5m2!1sid!2sid'
                            className='border-2 border-primary rounded-lg'
                        ></iframe>
                    </div>
                    <div className='flex flex-col mt-3 items-center w-80 justify-center'>
                        <h1
                            className='font-semibold text-base text-third'
                            data-aos='fade-up'
                            data-aos-duration='1500'
                        >
                            Alamat :
                        </h1>
                        <p
                            className='font-semibold text-primary text-sm'
                            data-aos='fade-up'
                            data-aos-duration='1500'
                        >
                            Jl. Atut Sulastri Raya, Serang, Kec. Serang, Kota
                            Serang, Banten 42116
                        </p>
                        <button
                            className='mt-2 bg-primary text-secondary px-3 py-2 rounded-lg shadow-2xl'
                            data-aos='fade-up'
                            data-aos-duration='2000'
                        >
                            <a href='#' target={'_blank'}>
                                SAVE THE DATE
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
