import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { fade } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Root = styled.div`
  background-color: ${props => fade(props.theme.palette.common.black, 0.05)};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

const Auth = ({ route }) => {
  return (
    <Root>
      <Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
    </Root>
  );
};

Auth.propTypes = {
  route: PropTypes.object
};

export default Auth;
