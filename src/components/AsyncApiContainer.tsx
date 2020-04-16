import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

const AsyncApi = dynamic(import('@kyma-project/asyncapi-react'), { ssr: false }); // Async API cannot be server-side rendered

interface AsyncApiContainerProps {
  url: string;
}

const AsyncApiContainer: FunctionComponent<AsyncApiContainerProps> = ({ url }) => <AsyncApi schema={{ url }} />;

export default AsyncApiContainer;
