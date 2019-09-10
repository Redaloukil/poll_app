import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../../components/Login';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store'; 

test('Test Login form' , ()=> {
    const container = document.createElement('div');
    const mockStore = configureStore();

    ReactDOM.render(
        <Provider store={mockStore}>
            <Login/>
        </Provider>
        , container);
    const form = container
    console.log(form);
})

describe('LOGIN COMPONENT TESTING' , () => {
    
})