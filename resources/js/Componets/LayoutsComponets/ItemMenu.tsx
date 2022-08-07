import React from 'react';
import { MenuType } from '../../Types/MenuDataTypes';
import {useDispatch,useSelector} from 'react-redux';
import { actions as menumanagerAction, MenuManagerType } from '../../stores/MenuManagerStore';
import { Link, usePage } from '@inertiajs/inertia-react';

const ItemMenu = ({item}:{item:MenuType}) => {
  const menuManager = useSelector( (state:{menuManager:MenuManagerType}) => state.menuManager )
  const dispatch = useDispatch()
  const currentUrl = usePage().url;
  
  const onClickSelect = (url:string) => {
    const validateActive = url === menuManager.item.name  ? !menuManager.item.active : true;

    dispatch(menumanagerAction.setActiveItem({itemName:url,active:validateActive}))
  }

  const stylesMenu = item.items.find(menuItem => menuItem.url === currentUrl)  ? {backgroundColor:'#e0dee8'} : {}

  return (
    <li onClick={(e)=>onClickSelect(item.menu_name)} className={menuManager.item.name === item.menu_name && menuManager.item.active ? 'active' : ''} style={stylesMenu}>
      <Link className={item.items.length === 0 ? '' : 'has-arrow' } href={item.link ? item.link : '#'} aria-expanded={menuManager.item.name === item.menu_name && menuManager.item.active ? 'true' : 'false'}>
        <i className={item.icon}></i><span className="nav-text">{item.menu_name}</span>
      </Link>
      {
        item.items.length > 0  ?
        <ul aria-expanded="false" className={`collapse ${menuManager.item.name === item.menu_name && menuManager.item.active ? 'in' : ''}`}>
          {item.items.map( (element, index) => {
            const itemStyle =  element.url === currentUrl ? {backgroundColor:'#e0dee8'} : {}
            return  <li style={itemStyle} key={index}><Link href={element.url}>{element.name}</Link></li>
          })}
        </ul>: ''
      }
    </li>
  )
}

export default ItemMenu;