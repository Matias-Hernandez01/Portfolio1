import HomeComponent from '../../component/home/HomeComponent';
import style from './Home.module.css';
const Home = () => {
  return (
    <div className={style.mainContainer}>
      <HomeComponent />
    </div>
  );
};
export default Home;
