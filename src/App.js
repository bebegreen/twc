import React, { Component } from 'react';
import logo from './logo.png';
import video from './video.mp4';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="video-container">
          <div className="shader">
            <header>
              <div className="logo"><span>Tanglewood</span> Wellness Center</div>
              <nav>
                <div>Home</div>
                <div>About</div>
                <div>Perfect Health</div>
                <div>Fasting</div>
                <div>Shop</div>
                <div>Events</div>
              </nav>
            </header>
          </div>
          <video id='video' loop autoPlay muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>

        <div className="cards">
          <div>
            <p>Create Perfect Health</p>
            <img src="https://tanglewoodwellnesscenter.com/perfect-health/wp-content/themes/thesis_18/custom/images/cph-system.png" />
          </div>
          <div>
            <p>Supervised Fasting</p>
            <img src="https://tanglewoodwellnesscenter.com/perfect-health/wp-content/themes/thesis_18/custom/images/supervisedfasting2016.jpg" />
          </div>
          <div>
            <p>Permaculture Design Course</p>
            <img src="https://tanglewoodwellnesscenter.com/perfect-health/wp-content/themes/thesis_18/custom/images/permaculture2016.jpg" />
          </div>

        </div>

        <footer>

        </footer>


      </div>
    );
  }
}

export default App;
