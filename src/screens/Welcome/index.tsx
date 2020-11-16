import React from 'react';
import './Welcome.css';


const Welcome = () => {

  return (
    <div id='welcomeBox'>
      {/* <div ref={element}> */}
      <div>
        {/* <img src={Logo} alt='logo' className='welcome--logo' /> */}
        <p>MS Protrolio</p>
        <p style={{
          color: 'rgba(97,97,97)', fontWeight: 'bold', fontSize: '3em',
          fontStyle: 'italic', fontFamily: 'monospace'
        }}>
          Hello cyworld! 
        </p>
      </div>
    </div>
  );
}

export default Welcome;