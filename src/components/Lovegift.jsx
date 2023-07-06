import React from 'react';

function Lovegift() {
    const salin = () => {
        navigator.clipboard.writeText(
            document.getElementById('button').getAttribute('dataNomor')
        );
        alert('Tersalin');
    };
    const salin2 = () => {
        navigator.clipboard.writeText(
            document.getElementById('button2').getAttribute('dataNomora')
        );
        alert('Tersalin');
    };

    return (
        <div className='container'>
            <div className='flex flex-col items-center justify-center mb-3 px-3'>
                <h1 className='font-extrabold font-estetik1 text-4xl text-gold mb-3'>
                    Love Gift
                </h1>
                <p className='font-semibold text-sm text-primary mb-6 text-center'>
                    Tanpa mengurangi rasa hormat, bagi anda yang ingin
                    memberikan tanda kasih untuk kami, dapat melalui :
                </p>
                {/* bank */}
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    <div
                        className='flex flex-col items-center justify-center border-4 text-center border-primary rounded-xl px-20 py-3 lg:mb-0 lg:mr-3 mb-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg'
                            alt='BRI'
                            className='w-[200px] mt-2'
                            data-aos='fade-up'
                            data-aos-duration='1250'
                        />
                        <h1
                            className='font-semibold text-primary mt-2'
                            data-aos='fade-up'
                            data-aos-duration='1500'
                        >
                            No. Rekening : 123123
                        </h1>
                        <h1
                            className='font-semibold text-primary'
                            data-aos='fade-up'
                            data-aos-duration='1750'
                        >
                            A.N Lorem Ipsum
                        </h1>
                        <button
                            data-aos='fade-up'
                            data-aos-duration='2000'
                            id='button'
                            onClick={salin}
                            dataNomor='123123'
                            className='bg-primary btn text-secondary px-5 py-1 rounded-xl mt-2 shadow-xl'
                        >
                            Salin No. Rekening
                        </button>
                    </div>
                    <div
                        className='flex flex-col items-center justify-center text-center border-4 border-primary rounded-xl px-20 py-3 lg:mt-0 lg:ml-3 mt-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        <img
                            src='https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png'
                            alt='BNI'
                            className='w-[200px]'
                            data-aos='fade-up'
                            data-aos-duration='1250'
                        />
                        <h1
                            className='font-semibold text-primary mt-2'
                            data-aos='fade-up'
                            data-aos-duration='1500'
                        >
                            No. Rekening : 321321
                        </h1>
                        <h1
                            className='font-semibold text-primary'
                            data-aos='fade-up'
                            data-aos-duration='1750'
                        >
                            A.N Lorem Ipsum
                        </h1>
                        <button
                            data-aos='fade-up'
                            data-aos-duration='2000'
                            id='button2'
                            onClick={salin2}
                            dataNomora='321321'
                            className='bg-primary text-secondary px-5 py-1 rounded-xl mt-2 shadow-xl'
                        >
                            Salin No. Rekening
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lovegift;
