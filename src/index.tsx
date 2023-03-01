import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AsyncApiPage } from './pages/AsyncApiPage';
import { SwaggerPage } from './pages/SwaggerPage';
import './assets/css/main.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<SwaggerPage />} />
      <Route path="/async-api" element={<AsyncApiPage />} />
      <Route path="*" element={<p style={{ textAlign: 'center' }}>404 - Not found</p>} />
    </Routes>
  </BrowserRouter>,
);
