import React from 'react';
import './AppName.css';

const AppName=(props) =>{
  return (
    <div className="AppName" style={{
  color:props.color,
  border: `3px solid ${props.border}`,
  backgroundColor: props.bg,
    }}>
    <h1>{props.title}</h1>
    <p>{props.slogan}</p>
    </div>
  );
}

export default AppName;