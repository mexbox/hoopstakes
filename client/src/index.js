import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
