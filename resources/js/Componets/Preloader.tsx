import React from 'react';

const Preloader = ()=>{
  return(
    <div  style={{width:'100%',height:'100%',position:'relative'}}>
      <div style={{position: 'absolute',top: 0, bottom: 0,left:0,right:0}}>
        <div className='loader'>
            <svg className='circular' viewBox='25 25 50 50'>
                <circle className='path' cx='50' cy='50' r='20' fill='none'strokeWidth="3" strokeMiterlimit="10" />
            </svg>
        </div>
      </div>
        
    </div>
  )
}

export default Preloader;