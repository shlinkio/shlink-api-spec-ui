import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useShlinkTags } from '../helpers';
import { AsyncApiPage } from '../pages/AsyncApiPage';
import { SwaggerPage } from '../pages/SwaggerPage';
import { Layout } from './Layout';

export const App: FC = () => {
  const tagsResult = useShlinkTags();

  return (
    <BrowserRouter>
      <Layout tags={tagsResult.tags}>
        <Routes>
          <Route index element={<SwaggerPage tagsResult={tagsResult} />} />
          <Route path="/async-api" element={<AsyncApiPage tagsResult={tagsResult} />} />
          <Route path="*" element={<p style={{ textAlign: 'center' }}>404 - Not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
