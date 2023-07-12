import { Landing } from '../../view';
import style from './ProjectsComponent.module.css';
import explora from '../../images/explora.png';
import wisewallet from '../../images/wisewallet.jpg';

const ProjectsComponent = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.landing}>
        <Landing />
      </div>
      <div className={style.containerProjects}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>My projects:</h1>
        </div>
        <div className={style.project}>
          <div className={style.detalle}>
            <a
              href='https://deploy-countries-ten.vercel.app/'
              target='_Blanck'
              className={style.a}
            >
              <img
                src={explora}
                alt='project personal'
                className={style.image}
              />
            </a>
            <div className={style.text}>
              <h1 className={style.nameProject}>Explora la tierra</h1>
              <span className={style.span}>Web site</span>
            </div>
          </div>

          <div className={style.detalle}>
            <a href='https://vimeo.com/843702475' target='_Blanck'>
              <img
                src={wisewallet}
                alt='project group'
                className={style.image}
              />
            </a>
            <div className={style.text}>
              <h1 className={style.nameProject}>Wise Wallet</h1>
              <span className={style.span}>Video description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsComponent;
