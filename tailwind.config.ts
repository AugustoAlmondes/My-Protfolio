import { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color_primary: "#0b0e1c",
                color_secondary: "#DD5CC5"
            }
        },
    },
    plugins: [],
}

export default config;