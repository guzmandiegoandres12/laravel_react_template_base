import React ,{useState}from 'react';
import Header from '../Componets/LayoutsComponets/Header';
import LocationHeadIndicator from '../Componets/LayoutsComponets/LocationHeadIndicator';
import Nav from '../Componets/LayoutsComponets/Nav';
import NkSidebar from '../Componets/LayoutsComponets/NkSidebar';


/**menu-toggle */

const LayoutDashboard = ({children}) =>{
  const [toogleMenu,setToggleMenu] = useState(true)
  
  const openMenu = () => {
    setToggleMenu(!toogleMenu)
  } 
  return (
    <div id="main-wrapper" className={`show ${toogleMenu ? 'menu-toggle' : ''}`}>
      <Nav/>
      <Header openMenu={openMenu}/>
      <NkSidebar/>
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