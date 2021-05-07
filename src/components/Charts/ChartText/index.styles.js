import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
        height: '285px',
        fontSize: '1.1rem',
        '@media (max-width: 460px)' : {
          fontSize: '.9rem'
        }
    },
    line: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '7px'
    },
    bold: {
      fontWeight: '600'
    },
    containerResult: {
      width: '200px',
      display: 'flex',
      justifyContent: 'space-between'
    }
});

export default useStyles;