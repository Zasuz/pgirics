/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'x': '10px 0 15px rgba(0, 0, 0, 0.1), -10px 0 15px rgba(0, 0, 0, 0.1)',
                'brand-shadow': '-.5rem 1rem 1rem rgba(0,0,0,.05)',
            },
            animation: {
                'clip-path-circle': 'clip-path-circle 1s forwards',
                'out-clip-path-circle': 'out-clip-path-circle 1s forwards',
            },
            keyframes: {
                'clip-path-circle': {
                    '0%': {'clip-path': 'circle(0% at 50% 50%)'},
                    '100%': {'clip-path': 'circle(100% at 50% 50%)'},
                },
                'out-clip-path-circle': {
                    '0%': {'clip-path': 'circle(100% at 50% 50%)'},
                    '100%': {'clip-path': 'circle(0% at 50% 50%)'},
                },
            },
            width: {
                '96-important': '96px !important',
            },
            backgroundImage: {
                "equality-conic-background-hover":"conic-gradient(#DA9AAC, #B2A42B, #E1712F, #BF462E, #5491D6, #8BBDE5, #C9B4D2, #DA9AAC)",
                "equality-conic-background":"conic-gradient(#DA9AAC, #C9B4D2, #8BBDE5, #5491D6, #BF462E, #E1712F, #B2A42B, #DA9AAC)",
                "equality-opacity" : "linear-gradient(1turn,#f7f2f8,rgba(247,242,248,.7) 40%,rgba(247,242,248,0))",
                "button-gradient" : "linear-gradient(22deg,#650f60,#db2c33)",
                "icon-equality":"url(https://images.ctfassets.net/oggad6svuzkv/eVAmSCtIJrNQzlo3X2Yx2/5f855f56ded7fcaf361d149d58e0ca55/ei_hero_logo.png)",
                "cruelty-free": "url(https://images.ctfassets.net/ywowj8d94i8y/1J7GG4Z5QxLciWu9DOpIpJ/c759cf7457ddc86e85d7b7fa047735a5/cruelty_dt.jpg?fm=webp)",
                "ingredient-production-page": "url(https://images.ctfassets.net/ywowj8d94i8y/6J5fTb7OKkQmZ6LMJeyq4v/98f0f2c87837ec0f2f9de643aacf8619/1.11.23_Ingredients_Page_Key_Image_Option_4__1___1_.jpg?fm=webp)",
                "home-page-section3-mobile": "https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp",
                "brand-page": "url(https://images.ctfassets.net/ywowj8d94i8y/16KFxXzqQSkgYSKRZKZTM2/7dd8bd56ff9d581f4a1dd9767adf94cb/brands_hero_mb.jpg)",
                "product-safety-page": "url(https://images.ctfassets.net/ywowj8d94i8y/5MNCQNM0uAE7suKGkIFPyC/155d9853585f84675b758ac89d59fee0/1.5.23_Product_Safety_Image.jpg)",
                "gradient-section3": "linear-gradient(0deg, rgba(0, 0, 0, .6), transparent 60%);",
                "gradient-opacity-lg": "linear-gradient(90deg, rgba(4, 25, 61, .8), rgba(4, 25, 61, .2) 71%)",
                "gradient-opacity": "linear-gradient(360deg, rgba(4, 25, 61, 6), rgba(4, 25, 61, .2) 71%)",

                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {

                "blue-opacity": "rgba(4, 25, 61,0.5)",
                "primary": "#003da5",
            }
        },
    },
    plugins: [],
};
