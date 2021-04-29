import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import StyleButton from './index.styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

const Button = ({ value }) => {
  const classes = useStyles();
  return (
    <div>
      <StyleButton variant="contained" color="primary" className={classes.margin}>
        {value}
      </StyleButton>
    </div>
  );
}

export default Button;