import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Eye from './images/eye.png';
import Draggable from 'react-draggable';



  class Animation extends React.Component {
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };

    render() {
      return (
        <div class="parent">
          <iframe class="image1"
            title="myFrame"
            src="https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html"
            width="800"
            height="600"
            allowfullscreen>
          </iframe>
          <Draggable>
            <img class="image2"
                alt=""
                src={Eye}>
            </img>
          </Draggable>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Animation />);
