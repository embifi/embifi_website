import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './Assets/Global.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-59MQVMQ'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  <ToastContainer />
    <App />
  </>
  // </React.StrictMode>
);


