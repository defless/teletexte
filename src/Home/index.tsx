import Header from './Header';
import News from './News';
import Menu from './Menu';
import Rainbow from './Rainbow';

import './index.css';

const Home = () => {

  return (
    <div className="home">
      <Header />
      <News />
      <Menu />
      <Rainbow />
    </div>
  )
};

export default Home;