import React from 'react';
import { MenuType } from '../../Types/MenuDataTypes';
import {useDispatch,useSelector} from 'react-redux';
import { actions as menumanagerAction, MenuManagerType } from '../../stores/MenuManagerStore';

const ItemMenu = ({item}:{item:MenuType}) => {
  const menuManager = useSelector( (state:{menuManager:MenuManagerType}) => state.menuManager )
  const dispatch = useDispatch()
  
  const onClickSelect = (item:string) => {
    const active = menuManager.itemActive;
    dispatch(menumanagerAction.setActiveItem(active === item ? '' : item))
  }

  return (
    <li onClick={(e)=>onClickSelect(item.menu_name)} className={menuManager.itemActive === item.menu_name ? 'active' : ''}>
      <a className={item.items.length === 0 ? '' : 'has-arrow' } href={item.link ? item.link : '#'} aria-expanded={menuManager.itemActive === item.menu_name ? 'true' : 'false'}>
        <i className={item.icon}></i><span className="nav-text">{item.menu_name}</span>
      </a>
      {
        item.items.length > 0  ?
        <ul aria-expanded="false" className={`collapse ${menuManager.itemActive === item.menu_name ? 'in' : ''}`}>
          {item.items.map( (element, index) =>  <li key={index}><a href={element.url}>{element.name}</a></li>)}
        </ul>: ''
      }
    </li>
  )
}

export default ItemMenu;