import classNames from 'classnames';
import type { FC } from 'react';

interface LoadingSpecProps {
  withError?: boolean;
}

export const LoadingSpec: FC<LoadingSpecProps> = ({ withError = false }) => (
  <div className={classNames('loading-spec', { 'loading-spec__with-error': withError })}>
    <h2>{withError ? 'An error occurred. Try reloading the page.' : 'Loading Shlink\'s Open API spec...'}</h2>
  </div>
);
