import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { useTypewriter } from 'react-simple-typewriter'


const Hero = () => {

    const [text] = useTypewriter({
        words: ['Full Stack ', 'Vehicle Design', 'Data Science', 'Technology!'],
        loop: 0
    })
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[50px] text-white ss:leading-[90.8px] leading-[65px]">
                        Land your<br className="sm:block hidden" />{" "}
                        <span className="text-white">Dream Job </span>{" "}
                    </h1>

                </div>

                <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] w-full ">
                    in {text}
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Learn industry skills that are in real time demand to get placed at upto 40 LPA</p>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <GetStarted></GetStarted>
                {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}


                <div className="absolute z-[0] w-[40%] h-[35%] right-20 bottom-20 blue__gradient" />
                <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>




        </section>
    );
};

export default Hero;