import React, {FC} from 'react';
import {useSelector} from 'react-redux'; 

import Header from '../Componets/LayoutsComponets/Header';
import LocationHeadIndicator from '../Componets/LayoutsComponets/LocationHeadIndicator';
import Nav from '../Componets/LayoutsComponets/Nav';
import NkSidebar from '../Componets/LayoutsComponets/NkSidebar';

import { MenuManagerType } from '../stores/MenuManagerStore';

import {dataMenu} from '../dataMocks/DataMenu';

/**menu-toggle */

const LayoutDashboard: FC<any> = ({children}) =>{
  const menuManager = useSelector( (state:{menuManager:MenuManagerType}) => state.menuManager )
  return (
    
      <div id="main-wrapper" className={`show ${ menuManager.menuContracted ? 'menu-toggle' : ''}`}>
        <Nav/>
        <Header/>
        <NkSidebar menuContent={dataMenu}/>
        <div className="content-body">
          <LocationHeadIndicator/>
          <div className="container-fluid mt-3">        
            {children}
          </div>
        </div>
      </div>
  
      
  )
} 

export default LayoutDashboard;