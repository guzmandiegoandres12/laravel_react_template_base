import { createSlice } from '@reduxjs/toolkit'

export interface MenuManagerType {
  itemActive: string,
  menuContracted: boolean
}
const initialstate: MenuManagerType = {
  itemActive: '',
  menuContracted: true
};

export const counterSlice = createSlice({
  name: 'menuManager',
  initialState: initialstate,
  reducers: {
    menuExpandTogle: (state: MenuManagerType) => {
      state.menuContracted = !state.menuContracted
    },
    setActiveItem: (state:MenuManagerType,{type,payload}:{type:string,payload:string})=> {
      state.itemActive = payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { actions } = counterSlice;

export default counterSlice.reducer;
