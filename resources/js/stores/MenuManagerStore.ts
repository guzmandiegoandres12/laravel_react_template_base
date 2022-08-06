import { createSlice } from '@reduxjs/toolkit'

export interface MenuManagerType {
  item: {
    name:string,
    active: boolean
  },
  menuContracted: boolean
}
const initialstate: MenuManagerType = {
  item: {
    name: '',
    active: false
  },
  menuContracted: true
};

export const counterSlice = createSlice({
  name: 'menuManager',
  initialState: initialstate,
  reducers: {
    menuExpandTogle: (state: MenuManagerType) => {
      state.menuContracted = !state.menuContracted
    },
    setActiveItem: (state:MenuManagerType,{type,payload}:{type:string,payload:{itemName:string,active:boolean}})=> {
      state.item.name = payload.itemName;
      state.item.active = payload.active;
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { actions } = counterSlice;

export default counterSlice.reducer;
