// @ts-expect-error - TODO
import AsyncApi from '@asyncapi/react-component/browser';
import type { FC } from 'react';

const asyncApiConfig = {
  show: { errors: process.env.NODE_ENV !== 'production' },
};

interface AsyncApiContainerProps {
  url: string;
}

export const AsyncApiContainer: FC<AsyncApiContainerProps> = ({ url }) => (
  <div style={{ width: '100%', maxWidth: '1484px', margin: '0 auto' }}>
    <AsyncApi schema={{ url }} config={asyncApiConfig} />
  </div>
);
