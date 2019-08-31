import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import Header, { HeaderProps } from './Header';

const SwaggerUI = dynamic(import('swagger-ui-react')); // Swagger UI cannot be SSR

interface SwaggerContainerProps extends HeaderProps {
  url: string;
}

const SwaggerContainer: FunctionComponent<SwaggerContainerProps> = ({ url, setActiveTag, tags }) => (
  <React.Fragment>
    <Header setActiveTag={setActiveTag} tags={tags} />
    <SwaggerUI url={url} docExpansion="list" />
  </React.Fragment>
);

export default SwaggerContainer;
