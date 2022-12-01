import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';


import App from './App';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';

import './index.css';

datadogRum.init({
  applicationId: 'b55167dc-2c1e-44f0-89ff-c25e26057881',
  clientToken: 'pubabfc8ac11d57f5eb5c5d87ff280bcdfc',
  site: 'datadoghq.com',
  service:'todo-list',
  
  version: '1.0.0',
  sampleRate: 100,
  sessionReplaySampleRate: 20,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel:'mask-user-input'
});
  
datadogRum.startSessionReplayRecording();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
