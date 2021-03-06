import { useMediaQuery } from 'react-responsive';
import './App.css';
import fox from "./img/fox.jpeg";
import snow from "./img/snow.jpeg";
import cloud from "./img/cloud.jpeg";
import mountain from "./img/mountain.jpeg";
import flashlight from "./img/flashlight.jpeg";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 480px)" });

return (
    <div>
      {
        isDesktop ? <isDesktop>
      <div className="container-wrapper">
          <div className="container">
            <img className="image" src={snow} />
            <div className="central-text">HEY</div> 
          </div>
          <div className="container">
            <img className="image" src={flashlight} />
            <div className="central-text">LET'S</div> 
          </div>
          <div className="container">
            <img className="image" src={mountain} />
            <div className="central-text">GIVE</div> 
          </div>
          
          <div className="container">
            <img className="image" src={fox} />
            <div className="central-text">ALL</div> 
          </div>
          
          <div className="container">
            <img className="image" src={cloud} />
            <div className="central-text">YOU CAN</div> 
          </div>
      </div>
      </isDesktop> : <isMobile>
      <div className="container-wrapper-mobile">
          <div className="container-mobile">
            <img className="image-mobile" src={snow} />
            <div className="central-text">HEY</div> 
          </div>
          <div className="container-mobile">
            <img className="image-mobile" src={flashlight} />
            <div className="central-text">LET'S</div> 
          </div>

          <div className="container-mobile">
            <img className="image-mobile" src={mountain} />
            <div className="central-text">GIVE</div> 
          </div>
          
          <div className="container-mobile">
            <img className="image-mobile" src={fox} />
            <div className="central-text">ALL</div> 
          </div>
          
          <div className="container-mobile">
            <img className="image-mobile" src={cloud} />
            <div className="central-text">YOU CAN</div> 
          </div>
      </div>
      </isMobile>
      }
      </div>
  )
};

export default App;