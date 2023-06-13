import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppProvider>
                <App />
            </AppProvider>
        </Provider>
    </React.StrictMode>
);
