import React from 'react';
import ItemMenu from './ItemMenu';
import { MenuManagerType } from '../../stores/MenuManagerStore';
import { MenuType } from '../../Types/MenuDataTypes';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';


const NkSidebar = ({menuContent}:{menuContent:MenuType[]}) => {
  return (
    <div className="nk-sidebar">
      <div className="nk-nav-scroll">
        <ul className="metismenu">
          {menuContent?.map((item,index) => <ItemMenu key={index} item={item} />) || ''}
          <li onClick={(e)=>{
            Inertia.post('/logout')
          }}  >
            <Link className="" href="#" aria-expanded='false'>
              <i className='icon-key'></i><span className="nav-text">Salir</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NkSidebar;