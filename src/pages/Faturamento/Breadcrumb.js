import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Grid, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumb = ({ ...rest }) => {
  return (
    <Grid container spacing={3} justify="space-between" {...rest}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link variant="body1" color="inherit" to="/" component={RouterLink}>
            Dashboard
          </Link>
          <Typography variant="body1" color="textPrimary">
            Faturamento
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default Breadcrumb;
