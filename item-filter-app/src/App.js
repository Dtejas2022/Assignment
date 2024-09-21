import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setItems } from './redux/itemsSlice';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import Heading from './components/Heading';

const App = () => {
    useEffect(() => {
        // Simulating fetching data
        const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry','Watchees'];
        store.dispatch(setItems(items));
    }, []);

    return (
        <Provider store={store}>
            <div>
                <Heading />
                <div className='h-screen flex items-center justify-center bg-gray-100'>
                <SearchBar />
                </div>
                <ItemList />
            </div>
        </Provider>
    );
};

export default App;
