import React from 'react';
   import { render } from '@testing-library/react';
   import { Provider } from 'react-redux';
   import store from '../redux/store';
   import ItemList from '../components/ItemList';

   test('renders items based on search term', () => {
       store.dispatch(setItems(['Apple', 'Banana', 'Cherry']));
       render(
           <Provider store={store}>
               <ItemList />
           </Provider>
       );

       // Add your assertions here
   });