import { FunctionComponent } from 'react';
// @ts-expect-error - TODO
import AsyncApi from '@asyncapi/react-component/browser';

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
      <AsyncApi schema={{ url }} config={asyncApiConfig} />
    </div>
  );
};

export default AsyncApiContainer;
