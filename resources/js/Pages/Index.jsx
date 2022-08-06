import React from 'react';
import LayoutDashboard from '../Layout/LayoutDashboard';

const  Index = ()=>{
  return (
    <div>
      INDEX CONTENT
    </div>
  )
}

Index.layout = page => <LayoutDashboard children={page} title="welcome"></LayoutDashboard>;

export default Index;