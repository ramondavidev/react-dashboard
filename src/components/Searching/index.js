import React from 'react';
import { fade, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';

import searchingAnimation from '~/assets/animations/searching.json';

const Searching = React.memo(() => {
  const theme = useTheme();
  return (
    <>
      <Box
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Lottie
          style={{
            backgroundColor: fade(theme.palette.common.black, 0.08),
            borderRadius: '100%',
            marginBottom: 16
          }}
          options={{
            loop: true,
            autoplay: true,
            animationData: searchingAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={256}
          width={256}
          isStopped={false}
          isPaused={false}
        />
        <Typography variant="h4">Pesquisando, aguarde...</Typography>
      </Box>
    </>
  );
});

export default Searching;
