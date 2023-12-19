import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'tachyons/css/tachyons.min.css';

const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`;
document.head.appendChild(style);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
