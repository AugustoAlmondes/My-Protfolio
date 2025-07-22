import About from "./About";
import Profile from "./Profile";
import Tech from "./Tech";
import Title from "./Title";

export default function Hero() {
    return (
        <section className="
            grid grid-cols-1 gap-6 grid-rows-auto 
            md:grid-cols-5 md:grid-rows-5 md:gap-10
            "
        >
            <Profile />
            <Title />
            <About />
            <Tech />
        </section>
    );
}