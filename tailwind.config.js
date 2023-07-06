/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: 'Poppins',
                estetik: 'Great Vibes',
                notoserif: 'Noto Serif',
                josefin: 'Josefin Sans',
                estetik1: 'Playball',
                estetik2: 'Arizonia',
            },
            colors: {
                primary: 'rgba(66,99,138,255)',
                third: 'rgb(3 105 161 )',
                secondary: 'rgb(244,244,244)',
                shadow: '#d6d3d1',
                gold: 'rgba(197,136,21,255)',
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/bg/paper-1.png')",
                flower: 'url/assets/flower/new/3.png',
            },
        },
        container: '2506px',
    },
    plugins: [],
};
