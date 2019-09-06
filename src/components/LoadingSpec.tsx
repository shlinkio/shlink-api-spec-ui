import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './LoadingSpec.css';

interface LoadingSpecProps {
  withError?: boolean;
}

const LoadingSpec: FunctionComponent<LoadingSpecProps> = ({ withError = false }) => (
  <div className={classNames('loading-spec', { 'loading-spec__with-error': withError })}>
    <h2>{withError ? 'An error occurred. Try reloading the page.' : 'Loading Shlink\'s Open API spec...'}</h2>
  </div>
);

export default LoadingSpec;
