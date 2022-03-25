import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/lotties/40003-discount.json';


 

class LottieAnima extends React.Component{

  
    
render() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: '40003-discount'
    }
  };
  
  
  
    return (
    <div>
        <Lottie options={defaultOptions} height={400} width={400}/>
    </div>

    );
  }
};

export default LottieAnima;