import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import fox from "/Users/Galym/Documents/src/hw/0613-react/hw/src/img/fox.jpeg";
import snow from "/Users/Galym/Documents/src/hw/0613-react/hw/src/img/snow.jpeg";
import cloud from "/Users/Galym/Documents/src/hw/0613-react/hw/src/img/cloud.jpeg";
import mountain from "/Users/Galym/Documents/src/hw/0613-react/hw/src/img/mountain.jpeg";
import flashlight from "/Users/Galym/Documents/src/hw/0613-react/hw/src/img/flashlight.jpeg";


function App() {
  const word1 = "HEY";
  const word2 = "LET'S";
  const word3 = "GIVE";
  const word4 = "ALL";
  const word5 = "CAN";

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
