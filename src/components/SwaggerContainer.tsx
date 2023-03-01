import { FunctionComponent } from 'react';
import SwaggerUI from 'swagger-ui-react';

interface SwaggerContainerProps {
  url: string;
}

const SwaggerContainer: FunctionComponent<SwaggerContainerProps> = ({ url }) =>
  <SwaggerUI url={url} docExpansion="list" deepLinking />;

export default SwaggerContainer;
