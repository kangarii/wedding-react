import React from 'react';

export default function Footer() {
    return (
        <footer
            className='container flex flex-col items-center justify-center px-3'
            data-aos='fade-up'
            data-aos-duration='1000'
        >
            <div className='text-center'>
                <p className='font-semibold text-sm text-primary mt-7'>
                    Atas kehadiran serta do'a restu Bapak/Ibu/Saudara/i kami
                    mengucapkan banyak terima kasih
                </p>
                <h1 className='font-semibold text-xl text-primary mb-7 mt-3'>
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh
                </h1>
            </div>
            <div className='flex flex-row justify-around w-full text-xs bg-primary rounded-2xl lg:text-sm md:text-base font-semibold text-secondary py-3 mb-3 border-b-2 border-primary'>
                <h1>
                    Everlasting Message <span className='mx-1'>©</span>2023
                </h1>
                <a
                    href='everlastingmessage.com'
                    className='border-b-2 border-secondary'
                >
                    EverlastingMessage.com
                </a>
                <h1>SoftTech Team</h1>
            </div>
        </footer>
    );
}
