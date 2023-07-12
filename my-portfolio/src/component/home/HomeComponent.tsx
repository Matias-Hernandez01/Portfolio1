import style from './HomeComponent.module.css';
import Landing from '../../view/Landing/Landing';
import { useState } from 'react';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import profile from '../../images/FotoPersonal.png';

const HomeComponent = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.landingContainer}>
        <Landing />
      </div>
      <div className={style.description}>
        <div className={style.description2}>
          <h1 className={style.text}>
            Hello world!
            <br /> my name is <br />
            <span className={style.name}>Matias Hernandez</span>
          </h1>
        </div>
        <div className={style.description2}>
          <h1 className={style.text}>
            I'am
            <span className={style.name2}>Full Stack</span>
          </h1>
        </div>
        <div className={style.contactContainer}>
          <ul className={style.ul}>
            <li className={style.li}>
              <a href='https://github.com/Matias-Hernandez01' target='_Blank'>
                <img
                  src={github}
                  alt='contacto'
                  className={style.imageContact}
                />
              </a>
            </li>
            <li className={style.li}>
              <a
                href='https://www.linkedin.com/in/matiashernandez00/'
                target='_Blank'
              >
                <img
                  src={linkedin}
                  alt='contacto'
                  className={style.imageContact}
                />
              </a>
            </li>
            <li className={style.li}>
              <a href='https://www.instagram.com/matias.dev/' target='_Blank'>
                <img
                  src={instagram}
                  alt='contacto'
                  className={style.imageContact}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.containerImageProfile}>
        <img src={profile} alt='foto perfil' className={style.imageProfile} />
      </div>
    </div>
  );
};

export default HomeComponent;
