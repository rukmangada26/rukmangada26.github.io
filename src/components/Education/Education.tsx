import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
    {
        degree: "MS in Business Analytics and Artificial Intelligence",
        school: "University of Texas at Dallas",
        courses: [
            "Machine Learning",
            "Natural Language Processing",
            "Deep Learning",
            "Data Mining",
            "Cloud Computing",
            "Causal Analytics",
        ],
        start: 2024,
        end: 2026,
        gpa: "3.9",
        imgSrc: "/images/asu.jpeg",
    },
    {
        degree: "B.Tech in Electronics and Electrical Engineering",
        school: "Kalinga Institute of Industrial Technology (KIIT)",
        courses: [
            "Data Structures & Algorithms",
            "Big Data",
            "Operating Systems",
            "Advanced Computer Networks",
            "Advanced Machine Learning",
        ],
        start: 2014,
        end: 2018,
        gpa: "3.84",
        imgSrc: "/images/pesu.jpeg",
    },
];

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[0]} side="left" />
          <College {...COLLEGES[1]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
