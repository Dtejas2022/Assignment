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
               className='w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg item-center shadow-sm 
           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
               value={searchTerm} 
               onChange={handleChange} 
               placeholder="Search items..." 
           />
       );
   };

   export default SearchBar;