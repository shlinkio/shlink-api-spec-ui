import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

// @ts-expect-error TS def not supported
const AsyncApi = dynamic(() => import('@asyncapi/react-component/browser'), { ssr: false }); // Async API cannot be server-side rendered

const asyncApiConfig = {
  show: { errors: process.env.NODE_ENV !== 'production' },
};

interface AsyncApiContainerProps {
  url: string;
}

const AsyncApiContainer: FunctionComponent<AsyncApiContainerProps> = ({ url }) => {
  if (typeof navigator === 'undefined') {
    return null;
  }

  return (
    <div style={{ width: '100%', maxWidth: '1484px', margin: '0 auto' }}>
      {/* @ts-expect-error TS def not supported */}
      <AsyncApi schema={{ url }} config={asyncApiConfig} />
    </div>
  );
};

export default AsyncApiContainer;
