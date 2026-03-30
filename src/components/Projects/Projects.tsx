import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Project from "@/components/Project";
import styles from "./Projects.module.css";
import PROJECTS from "@/data/projects.json";
import { ConstrainedTitle } from "@/components/SectionTitle";

const Projects: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Things I&apos;ve Built</ConstrainedTitle>
        <div className={styles.projectList}>
          {PROJECTS.map((project, idx) => (
            <Project key={idx} project={project} side={idx % 2 === 0 ? "right" : "left"} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
