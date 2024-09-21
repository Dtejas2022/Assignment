import React from 'react';
   import { useSelector } from 'react-redux';
   import { selectItems, selectSearchTerm } from '../redux/itemsSlice';
   import Item from './Item';

   const ItemList = () => {
       const items = useSelector(selectItems);
       const searchTerm = useSelector(selectSearchTerm);

       const filteredItems = items.filter(item => 
           item.toLowerCase().includes(searchTerm.toLowerCase())
       );

       return (
           <div>
               {filteredItems.map((item, index) => (
                   <Item key={index} item={item} />
               ))}
           </div>
       );
   };

   export default ItemList;