import React, { useEffect } from 'react';
import './App.css';
import { basicData, portfolioData } from './api/data';
import { RootContext } from './screens/Context';

import TopNav from './components/TopNav';
import Welcome from './screens/Welcome';
// import useSticky from './hooks/useSticky.js'
import Portfolio from './screens/Portfolio';
import Introduction from './screens/Introduction';
import Layer from './screens/Layer';
import Skills from './screens/Skills';


function handleScroll2(cmd:string, cb:any): any{
  var timer;

  if(timer) {
		window.clearTimeout(timer);
	}

	timer = window.setTimeout(function() {
		// actual callback
		cb(cmd)
	}, 2000);
}

function innerfnc(cmk: string){
  // alert("innerfnc cmd : " + cmk);
}
window.addEventListener('scroll', handleScroll2('ccc', innerfnc));


// function handleScroll2(cmd, cb){
//   var timer;

//   if(timer) {
// 		window.clearTimeout(timer);
// 	}

// 	timer = window.setTimeout(function() {
// 		// actual callback
// 		cb(cmd)
// 	}, 2000);
// }

// function innerfnc(cmk){
//   alert("innerfnc cmd : " + cmk);
// }
// window.addEventListener('scroll', function(){
//   handleScroll2('ccc', innerfnc)
// });




function App() {
  console.log("App() comp")
  const { state, dispatch } = React.useContext(RootContext);
  
  useEffect( () => {
    dispatch({
      type: "FETCH_BASIC_DATA",
      payload: basicData
    })

    dispatch({
      type: "FETCH_PORTFOLIO_DATA",
      payload: portfolioData
    })
    
    // dispatch({
    //   type: "HANDLE_LAYER",
    //   payload: {
    //     openLayer: true,
    //     layer: 'preview',
    //     activeProject: 'tmmk'
    //   }
    // })

  }, [])

  return (
    <div id="container">
      
      {/* { state.layerScreen.openLayer && 
          <Layer />
      } */}
      <TopNav />
      <Welcome />
      <Skills />
      <Portfolio />
      {/* <Introduction /> */}
    </div>
  );
}

export default App;
