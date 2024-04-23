import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./Feedback";

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Corporates<br className="sm:block hidden" /> vouch for HM</h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Don’t just take our word for it. Our model has been tailored to corporates and developed in close association with them. The result is a system they prefer and like to associate with.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        </div>
    </section>
);

export default Testimonials;