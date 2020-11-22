import React from 'react';
import './Welcome.css';


const Welcome = () => {

  return (
    <div id='welcomeBox'>
      {/* <div ref={element}> */}
      <div>
         <p id="position">Bakcend & Frontend Developer</p>

        <p id="introDesction">
          프로그래밍을 폭넓게 공부해왔으며<br />
          퀄리티 있는 결과물을 만들어내고자 노력합니다
        </p>
       

        <p id="bottomTitle">Portfolio of Chiyeon Kim</p>
      </div>
    </div>
  );
}

export default Welcome;