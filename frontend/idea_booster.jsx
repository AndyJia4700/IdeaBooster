import React from "react";
import ReactDOM from 'react-dom'
import configureStore from "./store/store";
import Root from "./components/root";



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>Welcome to IdeaBooster</h1>, root);
});