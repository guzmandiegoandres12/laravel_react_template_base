export interface MenuType {
  menu_name: string,
  icon: string,
  link?: undefined,
  items: ItemMenuType[]
}

export interface ItemMenuType {
  name: string,
  url: string
}

