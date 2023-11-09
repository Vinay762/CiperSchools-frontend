import LeftSide from './components/LeftSide.js';
import Feed from './components/Feed.js';
import RightSide from './components/RightSide.js';
import Navbar from './components/Navbar.js';
import './css/app.css'

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <Navbar />
      </div>
      <div className='rest_all'>
        <div className="left-side">
          <LeftSide />
        </div>
        <div className="feed">
          <Feed />
        </div>
        <div className="right-side">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
