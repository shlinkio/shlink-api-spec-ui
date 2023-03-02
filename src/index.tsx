import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import '@asyncapi/react-component/styles/default.css';
import 'swagger-ui-react/swagger-ui.css';
import './assets/css/main.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />);
