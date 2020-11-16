import React, { useEffect } from 'react';
import { RootContext } from '../Context';
import { disableScroll, enableScroll } from './ControllScroller';
import ReactPlayer from 'react-player';
// import { IProject } from '../../interfaces';

const Layer = () => {
  const { state, dispatch } = React.useContext(RootContext);

  const { activeProject, layer } = state.layerScreen;

  console.log("Layer() comp ")
  const closeLayer = () => {
    const resetLayer = {
      openLayer: false,
      layer: '',
      activeProject: ''
    }

    dispatch({
      type: 'HANDLE_LAYER',
      payload: resetLayer
    })

    enableScroll();
  }
  useEffect(() => {
    disableScroll();


  }, [])
  return (
    <div style={{
      width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)',
      position: 'fixed', top: 0, left: 0, zIndex: 99
    }}>

      <div style={{ width: '100%', height: '100%', display:'flex', 
        border:'1px solid green', justifyContent:'center', alignItems:'center'}}>
        {/* <ReactPlayer controls url="https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/tmmk_video.mov" width='80%' height='80%'/> */}
        <ReactPlayer controls url={activeProject.video_url} width='80%' height='80%'/>
      </div>

      <span
        onClick={closeLayer}
        style={{
          border: '2px solid gray',
          backgroundColor: 'gray', width: '50px', height: '50px', borderRadius: '25px',
          position: 'absolute', top: '30px', right: '30px', color: '#fff', fontSize: 30,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          cursor: 'pointer'
        }}>X</span>
    </div>
  );
}

export default Layer;
