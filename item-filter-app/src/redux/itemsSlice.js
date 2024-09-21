import { createSlice } from '@reduxjs/toolkit';

   const itemsSlice = createSlice({
       name: 'items',
       initialState: {
           items: [],
           searchTerm: ''
       },
       reducers: {
           setItems(state, action) {
               state.items = action.payload;
           },
           setSearchTerm(state, action) {
               state.searchTerm = action.payload;
           }
       }
   });

   export const { setItems, setSearchTerm } = itemsSlice.actions;
   export const selectItems = state => state.items.items;
   export const selectSearchTerm = state => state.items.searchTerm;
   export default itemsSlice.reducer;