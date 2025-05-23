import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import '@asyncapi/react-component/styles/default.css';
import 'swagger-ui-dist/swagger-ui.css';
import './assets/css/main.css';

createRoot(document.getElementById('root')!).render(<App />);
