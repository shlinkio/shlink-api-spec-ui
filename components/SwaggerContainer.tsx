import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import Header from './Header';

const SwaggerUI = dynamic(import('swagger-ui-react')); // Swagger UI cannot be SSR

interface SwaggerContainerProps {
  url: string;
  setUrl: (newUrl: string) => void;
  tags: string[];
}

const SwaggerContainer: FunctionComponent<SwaggerContainerProps> = ({ url, setUrl, tags }) => (
  <React.Fragment>
    <Header setUrl={setUrl} tags={tags} />
    <SwaggerUI url={url} docExpansion="list" />
  </React.Fragment>
);

export default SwaggerContainer;
