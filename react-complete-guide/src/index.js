//This is our MAIN component file which executed first 
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todo />);
