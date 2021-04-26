import React from 'react';
import { LoadingBackground, LoadingSpinner, LoadingTitle } from './styles';
import { LinearProgress } from '@material-ui/core';

const Loading = () => {
  return (
    <LoadingBackground>
      <LoadingSpinner>
        <LoadingTitle>Carregando...</LoadingTitle>
        <LinearProgress />
      </LoadingSpinner>
    </LoadingBackground>
  );
};

export default React.memo(Loading);
