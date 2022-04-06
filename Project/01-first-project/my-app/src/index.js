import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderAllTree } from './render';
import state from './Redux/state';



rerenderAllTree(state);

reportWebVitals();