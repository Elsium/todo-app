import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                quicksand: ['var(--font-quicksand)'],
                jost: ['var(--font-jost)'],
            },
            colors: {
                'ground': '#f4f4f4',
                'listHover': '#ebebeb',
            }
        },
    },
    plugins: [],
}
export default config
