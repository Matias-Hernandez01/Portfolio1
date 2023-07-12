import { Landing } from '../../view';
import style from './AboutmeComponent.module.css';
const AboutmeComponent: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.landingContainer}>
        <Landing />
      </div>
      <div className={style.aboutContainer}>
        <div>
          <div className={style.titleContainer}>
            <h1 className={style.aboutme}>About me</h1>
          </div>
          <div className={style.tagTitle}>
            <h1 className={style.name}>{`<Matias Hernandez />`}</h1>
            <h1 className={style.name2}>{`<Full Stack Developer />`}</h1>
          </div>
        </div>
        <div className={style.spanContainer}>
          <span className={style.descriptionAboutme}>
            I am a young person passionate about technology and I have a strong
            desire to learn and grow in the field of information technology. My
            specialty lies in the creation of attractive and functional user
            experiences, where I combine my creativity and imagination to
            achieve satisfactory results. I am a proactive and dedicated person,
            with the ability to adapt to different work situations. I am
            constantly learning and I like to face challenges, always seeking to
            exceed my own expectations. I am self-demanding and I strive to
            achieve excellence in my work. In short, I am passionate about
            technology with skills in creating user experiences, adaptability,
            and a focus on continuous learning.
          </span>
        </div>
        <div className={style.containerContact}>
          <div className={style.contact}>
            <p className={style.textTitle}>
              Linkedin: <br />
              <a
                className={style.a}
                href='https://www.linkedin.com/in/matiashernandez00/'
                target='_Blanck'
              >
                <span className={style.detailStudy}>Matias Hernandez</span>
              </a>
              <hr />
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.textTitle}>
              GitHub: <br />
              <a
                className={style.a}
                href='https://github.com/Matias-Hernandez01'
                target='_Blanck'
              >
                <span className={style.detailStudy}>Matias-Hernandez01</span>
              </a>
              <hr />
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.textTitle}>
              Email: <br />
              <span className={style.detailStudy}>Matias2k00@gmail.com</span>
              <hr />
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.textTitle}>
              Phone: <br />
              <span className={style.detailStudy}>(+54)91162732692</span>
              <hr />
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.textTitle}>
              Location: <br />
              <span className={style.detailStudy}>
                Buenos Aires - Argentina
              </span>
              <hr />
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.textTitle}>
              Dogs: <br />
              <span className={style.detailStudy}>🦴🦴🦴</span>
              <hr />
            </p>
          </div>
        </div>
        <h1 className={style.name}>Education</h1>
        <div className={style.about}>
          <h3 className={style.textTitle}>📍2023-2023</h3>
          <h3 className={style.textTitle}>
            University technician in web development
          </h3>
          <h2 className={style.detailStudy}>First year in course</h2>
          <h3 className={style.textTitle}>📍2022-2023</h3>
          <h3 className={style.textTitle}>
            Full Stack Developer - Henry Bootcamp
          </h3>
          <h2 className={style.detailStudy}>
            +700 theoretical-practical course hours.
          </h2>
        </div>
        <h1 className={style.name}>Experience</h1>
        <div className={style.about}>
          <h3 className={style.textTitle}>📍2022-2022</h3>
          <h3 className={style.textTitle}>Telemarketing - Alcanzo.SA</h3>
          <h2 className={style.detailStudy}>
            Thanks to my time in telemarketing work, I have developed and
            acquired key skills, such as proactivity, teamwork, effective
            communication, meeting objectives and responsibility, which are
            essential for my professional growth and to add value in future job
            opportunities.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default AboutmeComponent;
