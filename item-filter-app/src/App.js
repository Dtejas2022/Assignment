import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setItems } from './redux/itemsSlice';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
    useEffect(() => {
        // Simulating fetching data
        const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry','Watchees'];
        store.dispatch(setItems(items));
    }, []);

    return (
        <Provider store={store}>
            <div>
                <SearchBar />
                <ItemList />
            </div>
        </Provider>
    );
};

export default App;