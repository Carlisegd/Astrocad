import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/lotties/92963-ribbon-sale-50.json';


 

class Etiqueta extends React.Component{

  
    
render() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: '92963-ribbon-sale-50'
    }
  };
  
  
  
    return (
    <div>
        <Lottie options={defaultOptions} height={200} width={200}/>
    </div>

    );
  }
};

export default Etiqueta;