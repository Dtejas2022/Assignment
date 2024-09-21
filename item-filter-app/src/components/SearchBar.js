import React from 'react';
   import { useDispatch, useSelector } from 'react-redux';
   import { setSearchTerm, selectSearchTerm } from '../redux/itemsSlice';

   const SearchBar = () => {
       const dispatch = useDispatch();
       const searchTerm = useSelector(selectSearchTerm);

       const handleChange = (e) => {
           dispatch(setSearchTerm(e.target.value));
       };

       return (
           <input 
               type="text" 
               value={searchTerm} 
               onChange={handleChange} 
               placeholder="Search items..." 
           />
       );
   };

   export default SearchBar;