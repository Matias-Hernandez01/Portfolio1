import { Landing } from '../../view';
import style from './TecnologiasComponent.module.css';
import javascript from '../../images/javascript.png';
import typescript from '../../images/typescript.png';
import node from '../../images/nodejs.png';
import express from '../../images/express.png';
import sequelize from '../../images/sequelize.png';
import sql from '../../images/servidor-sql.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import npm from '../../images/npm.png';
import git from '../../images/git.png';
import sass from '../../images/sass.png';
import tailwind from '../../images/tailwind-css.png';
import html from '../../images/html5.png';
import css from '../../images/css3.png';
import postgres from '../../images/postgre.png';
const TecnologiasComponent = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.landingContainer}>
        <Landing />
      </div>
      <div className={style.containerComponent}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Skills:</h1>
        </div>
        <div className={style.skillContainer}>
          <div className={style.imageContainer}>
            <img className={style.image} src={javascript} alt='image Skill' />
            <span className={style.span}>JavaScript</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={express} alt='image Skill' />
            <span className={style.span}>Express</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={node} alt='image Skill' />
            <span className={style.span}>NodeJS</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={sequelize} alt='image Skill' />
            <span className={style.span}>Sequelize</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={sql} alt='image Skill' />
            <span className={style.span}>SQL</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={typescript} alt='image Skill' />
            <span className={style.span}>TypeScript</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={react} alt='image Skill' />
            <span className={style.span}>ReactJS-Native</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={redux} alt='image Skill' />
            <span className={style.span}>Redux</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={tailwind} alt='image Skill' />
            <span className={style.span}>TailwindCSS</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={html} alt='image Skill' />
            <span className={style.span}>Html5</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={css} alt='image Skill' />
            <span className={style.span}>Css3</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={sass} alt='image Skill' />
            <span className={style.span}>Sass</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={git} alt='image Skill' />
            <span className={style.span}>Git</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={npm} alt='image Skill' />
            <span className={style.span}>Npm</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={postgres} alt='image Skill' />
            <span className={style.span}>PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TecnologiasComponent;
