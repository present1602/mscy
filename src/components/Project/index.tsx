import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { RootContext } from '../../screens/Context';
import './Project.css';


type IInfoEl = {
  name: string,
  value: string
}

const Project = (props: any) => {

  const { dispatch } = React.useContext(RootContext);

  const data = props;
  // console.log("in project data.abbr : ", data.abbr);
  const imagePath = require(`../../assets/images/portfolio/${data.thumbImg}`);

  var openlayer = (classification: string) => {
    console.log("in project data : ", data);

    const payload = {
      openLayer: true,
      layer: classification,
      activeProject: data,
    }
    dispatch({
      type: 'HANDLE_LAYER',
      payload: payload
    })
  }

  useEffect(() => {

  }, [])


  return (
    <div style={{
      padding: '5%', margin: '5% 0', backgroundColor: '#fff',
      outline: '1px solid rgba(222,222,222)',
      // textAlign:'center' 
    }}>
      <div className="flex-res">
        {/* <div style={{ display: 'inline-block', height: '200px', 
            background:`url(${String(imagePath)})`, backgroundSize: 'cover'
          }}> */}
        <div className='projectImgBox'>
          <img src={String(imagePath)}
          />
        </div>

        <div style={{ display: 'inline-block', width: '100%' }}>
          <div style={{ padding: '2%' }}>
            <p className="projectTitle">
              {data.title}
            </p>
            {
              data.intro_description.split("\n").map((text: string, line: number) => (
                <p key={line} className="mainInfoText"> {text}</p>
              ))
            }
            <p style={{ padding: '2%' }}>
              <span
                onClick={() => openlayer('video')}
                style={{ backgroundColor: 'rgba(184,126,186)', color: '#fff', padding: '1% 3%', margin: '1% 0', borderRadius: '3px' }}>
                Video
              </span>
              {/* <span
                //  ref={previewButton}
                onClick={() => openlayer('preview')}
                style={{
                  backgroundColor: 'rgba(97,153,54)', color: '#fff',
                  padding: '1%', margin: '1%', borderRadius: '3px'
                }}>
                preview
              </span> */}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-res">
        <div style={{ flex: 3.8, padding: '1%' }}>
          <p className='subInfoTop' >
            <span className='subInfoTitle'>Basic Info</span>
          </p>

          {data.basic_info.map((el: IInfoEl) =>
            <p key={Math.random()} className='subInfoText'>
              <strong>
                <span style={{ display:'inline-block', width: '30px'}}>{el.name}</span> : 
              </strong>
              <span style={{ padding: '0 10px'}}>{el.value}</span>
            </p>
          )}
        </div>
        <div style={{ flex: 6.2, padding: '1%' }}>
          <p className='subInfoTop' >
            <span className='subInfoTitle'>Description</span>
          </p>
          <div>
            {
              data.description.split("\n").map((text: string, line: number) => (
                  <p key={Math.random()} className='subInfoText'>{text}</p>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>

  );

}

export default Project;
