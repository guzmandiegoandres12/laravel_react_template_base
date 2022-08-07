import React, { useState } from 'react';
import PropTypes from 'prop-types';

export enum ALERT_TYPE {
    'primary' = 'alert-primary',
    'secondary'= 'alert-secondary',
    'success' = 'alert-success',
    'danger' = 'alert-danger',
    'warning' = 'alert-warning',
    'info' = 'alert-info',
    'light' = 'alert-light',
    'dark' = 'alert-dark'
  
}

const Alert = ({type, dimisible = false, show = true, children}) => {
    const [showState,setShowState] = useState(show)
    return (
      <div className={`my-2 alert ${type} ${dimisible ? 'alert-dismissible' : ''} fade ${  showState ? 'show' : ''}`}>
          {
            dimisible ? 
            (
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setShowState(false)}}>
              <span aria-hidden="true">&times;</span>
            </button> ) : ''
          }
          <div>
            {children}
          </div>
      </div>
    )    
}

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(ALERT_TYPE)).isRequired,
  dimisible: PropTypes.bool,
  show: PropTypes.bool,
  children: PropTypes.node
}
export default Alert;