import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/images/aruba.jpeg"
                alt="Accenture"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/images/aruba.jpeg"
                      alt="Accenture"
                  ></Image>
                  <p className={styles.time}>Dec 2021 – Jan 2024</p>
                  <h4 className={styles.company}>Accenture Solutions Pvt. Ltd., Mumbai (India)</h4>
                  <h4 className={styles.role}>Senior Data Engineer</h4>
                  <p className={styles.description}>
                    <em>Project: Intelligent Insights to Business (I2B) – Migration to GCP</em><br/><br/>
                    ⦿ &nbsp; &nbsp; Implemented forecasting models to predict headcount and attrition for future months, giving
                    leadership forward-looking insights for capacity planning and talent strategy.<br/><br/>
                    ⦿ &nbsp; &nbsp; Collaborated with BI team to develop dashboards with drill-down tiles by Market, MU, DG, and DU,
                    providing visibility into onboarding, attrition, and hybrid office attendance.<br/><br/>
                    ⦿ &nbsp; &nbsp; Wrote optimized SQL queries in Google BigQuery to transform 10M+ monthly records into structured,
                    analysis-ready datasets, improving processing time by over 20%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Automated reporting, reducing refresh times from 24 hours to less than 2 hours, enabling real-time
                    decision-making.<br/>
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Apr 2018 – Nov 2021</p>
                  <h4 className={styles.role}>Data Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Built an Enterprise-wide People Analytics platform enabling leadership to track headcount,
                    attrition, and recruitment metrics across different Org units.<br/><br/>
                    ⦿ &nbsp; &nbsp; Designed ETL workflows in MS SQL &amp; SSIS to process 1M+ employee and recruitment
                    records/month into analytics-ready tables.<br/><br/>
                    ⦿ &nbsp; &nbsp; Developed parameterized stored procedures for role-based data access, providing secure insights
                    to Market Leads, MU Leads, and DG/DU heads.<br/><br/>
                    ⦿ &nbsp; &nbsp; Collaborated with business stakeholders to analyze workforce data, identifying attrition trends
                    and resource gaps, achieving a 10% reduction in production costs.<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
