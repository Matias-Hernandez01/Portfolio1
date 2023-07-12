import style from './Landing.module.css';
import logo from '../../images/LOGO.png';
import casa from '../../images/casa.png';
import about from '../../images/perfil.png';
import carpeta from '../../images/carpeta.png';
import contact from '../../images/contacto.png';
import { useState, useEffect } from 'react';
import options from '../../images/opciones.png';
import x from '../../images/x.png';
import tecnologias from '../../images/tecnologia.png';
const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 960) {
        setIsOpen(true);
      } else if (windowWidth < 1200) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.mainContainer}>
      <div
        className={`${isOpen ? style.header : style.openDescription} ${
          isOpen ? style.open : ''
        }`}
      >
        {isOpen && (
          <div className={style.buttonOn}>
            <button onClick={toggleHeader} className={style.buttonOptions}>
              <img src={x} title='options' className={style.imgOptions} />
            </button>
          </div>
        )}
        <div className={style.containerLogo}>
          <img src={logo} alt='logo' className={style.logo} />
        </div>
        <div className={style.containerOptions}>
          <div className={style.containerHome}>
            <a href='home' className={style.options}>
              <img src={casa} alt='home' className={style.homePng} />
              HOME
            </a>
          </div>
          <div className={style.containerHome}>
            <a href='about' className={style.options}>
              <img src={about} alt='perfil' className={style.homePng} />
              ABOUT
            </a>
          </div>
          <div className={style.containerHome}>
            <a href='projects' className={style.options}>
              <img src={carpeta} alt='projects' className={style.homePng} />
              PROJECTS
            </a>
          </div>
          <div className={style.containerHome}>
            <a href='technologies' className={style.options}>
              <img
                src={tecnologias}
                alt='technologies'
                className={style.homePng}
              />
              SKILLS
            </a>
          </div>
          <div className={style.containerHome}>
            <a href='contact' className={style.options}>
              <img src={contact} alt='projects' className={style.homePng} />
              CONTACT
            </a>
          </div>
        </div>
      </div>
      {!isOpen && (
        <div className={style.buttonOptiones}>
          <button onClick={toggleHeader} className={style.buttonOptions}>
            <img src={options} title='options' className={style.imgOptions} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Landing;
