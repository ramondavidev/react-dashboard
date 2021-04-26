import React from 'react';
import { fade, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';

import emptyStateAnimation from '~/assets/animations/empty-state.json';

const ListEmpty = React.memo(() => {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64
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
          animationData: emptyStateAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={256}
        width={256}
        isStopped={false}
        isPaused={false}
      />
      <Typography variant="h4" align="center">
        Nenhum registo encontrado
      </Typography>
      <Typography variant="body1" align="center">
        Alterar termo da pesquisa
      </Typography>
    </Box>
  );
});

export default ListEmpty;
