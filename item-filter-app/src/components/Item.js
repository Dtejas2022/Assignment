import React from 'react';
    
//used for optimisation
   const Item = React.memo(({ item }) => { 
       return <div>{item}</div>;
   });

   export default Item;