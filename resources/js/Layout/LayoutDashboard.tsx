import React ,{useState}from 'react';
import Header from '../Componets/Header';
import Nav from '../Componets/Nav';
import NkSidebar from '../Componets/NkSidebar';


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
      <div>
        {children}
      </div>
      
    </div>
  )
} 

export default LayoutDashboard;