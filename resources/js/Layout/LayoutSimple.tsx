import React from 'react';



const LayoutSimple = ({children}) =>{
  return (
    <div className="login-form-bg h-100">
      <div className="container h-100">
        {children}
      </div>
    </div>
  )
} 

export default LayoutSimple;