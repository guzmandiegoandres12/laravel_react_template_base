import React from 'react';
import LayoutDashboard from '../Layout/LayoutDashboard';

const  Index = ()=>{
  return (
    <div>
      content dash
    </div>
  )
}

Index.layout = page => <LayoutDashboard children={page} title="welcome"></LayoutDashboard>;

export default Index;