import React from 'react';
import LayoutDashboard from '../Layout/LayoutDashboard';

const  Users = ()=>{
  return (
    <div>
      CONTENT USERS
    </div>
  )
}

Users.layout = page => <LayoutDashboard children={page} title="welcome"></LayoutDashboard>;

export default Users;