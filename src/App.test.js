import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from './store'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const MyAppWithStore = () => (
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  );

  ReactDOM.render(MyAppWithStore
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
