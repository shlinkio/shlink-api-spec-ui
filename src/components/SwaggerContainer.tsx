import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import './SwaggerContainer.css';

const SwaggerUI = dynamic(import('./swagger-ui-react'), { ssr: false }); // Swagger UI cannot be server-side rendered

interface SwaggerContainerProps {
  url: string;
}

const SwaggerContainer: FunctionComponent<SwaggerContainerProps> = ({ url }) => (
  <SwaggerUI url={url} docExpansion="list" deepLinking={true} />
);

export default SwaggerContainer;
