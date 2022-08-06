import React from 'react';
import ItemMenu from './ItemMenu';
import { MenuManagerType } from '../../stores/MenuManagerStore';
import { MenuType } from '../../Types/MenuDataTypes';


const NkSidebar = ({menuContent}:{menuContent:MenuType[]}) => {
  return (
    <div className="nk-sidebar">
      <div className="nk-nav-scroll">
        <ul className="metismenu">
          {menuContent?.map((item,index) => <ItemMenu key={index} item={item} />) || ''}
        </ul>
      </div>
    </div>
  )
}

export default NkSidebar;