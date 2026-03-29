"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH } from "breakpoints";
import styles from "./About.module.css";
import { useTheme } from "@/context/ThemeContext";


interface Props {
    delegated?: any;
}

const About = ({ ...delegated }: Props) => {
    const downloadResume = () => {
        window.open("/resume", "_blank");
    };

    const { aboutUrl, aboutUrlSmall } = useTheme();

    return (
        <div className={styles.about} {...delegated} id="about">
            <div className={styles.aboutme}>
                <SectionTitle side={"left"}>About Me</SectionTitle>
                <p className={styles.description}>
                    Hi there! My name is Rukmangada and I am pursuing MS in Business Analytics and
                    Artificial Intelligence from the University of Texas at Dallas. I am an aspiring
                    Data Scientist with 5+ years of professional experience, passionate about building
                    ML models, developing ETL pipelines, and turning complex data into actionable
                    business insights.
                </p>
                <div className={styles.description}>
                    What I bring to the table:<br/>
                    <ul className="mt-2 space-y-2 list-inside">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            5+ Years of Professional Experience in Data Engineering &amp; Analytics
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Proficiency in Python, PySpark, SQL, BigQuery, Airflow, PyTorch, TensorFlow, XGBoost, Scikit-Learn, Pandas, NumPy, Power BI, Tableau
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Expertise in Machine Learning, Deep Learning, NLP, and building end-to-end data pipelines
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            • Certification of Executive General Management Program from Indian Institute of Management Calcutta (IIM Calcutta)
                            <br />
                            • Certification of Meta Database Engineer from Coursera
                        </li>
                    </ul>
                </div>
                <Button className={styles.download} onClick={downloadResume}>
                    Download Resume
                </Button>
            </div>
            <picture className={styles.picture}>
                <source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
                <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall}/>
                <img src={aboutUrl} alt="Rukmangada"/>
            </picture>
        </div>
    );
};

export default About;


//
// export interface IProps {
//     delegated?: any;
//     theme: "dark" | "light";
// }
//
// const About: React.FC<React.PropsWithChildren<IProps>> = ({
//                                                               children,
//                                                               theme,
//                                                               ...delegated
//                                                           }) => {
//     const downloadResume = () => {
//         window.open("/resume", "_blank");
//     };
//
//     const aboutUrl =
//         theme === "light" ? "images/shikhar-3.jpeg" : "images/shikhar-3.jpeg";
//     return (
//         <Wrapper {...delegated} id="about">
//             <AboutMe>
//                 <SlideUp>
//                     <SectionTitle label={"About Me "} side={"left"}/>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         Hi there! My name is Shikhar Gupta, and I am currently pursuing a Master's in Computer Science
//                         at ASU, set to graduate in May 2024.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         I have worked as a Software Engineer at Aruba Networks for 3 years as a full-stack developer,
//                         and I am well-versed in Python, C++, Docker, Kubernetes, ML frameworks, and Linux along with an
//                         in-depth understanding of SQL/NoSQL databases software systems.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         Creativity and innovation drive my problem-solving
//                         approach, as I enjoy building products that positively impact society and automating repetitive
//                         tasks in my life.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Download onClick={downloadResume}>
//                         Download Resume
//                     </Download>
//                 </SlideUp>
//             </AboutMe>
//             <Picture>
//                 <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
//                 <Source
//                     media={MIN_WIDTH.tablet}
//                     srcSet="images/shikhar-3.jpeg"
//                 />
//                 <Image src={aboutUrl} alt="Shikhar Gupta"/>
//             </Picture>
//         </Wrapper>
//     );
// };
//
